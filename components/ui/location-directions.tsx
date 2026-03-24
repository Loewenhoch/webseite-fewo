"use client";

import Link from "next/link";
import { AlertTriangle, LocateFixed, Navigation, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type GeoStatus = "idle" | "requesting" | "tracking" | "denied" | "unsupported" | "error";

type GeoPoint = {
  lat: number;
  lng: number;
  accuracy: number;
  timestamp: number;
};

type LocationDirectionsProps = {
  destinationQuery: string;
  fallbackMapsUrl: string;
};

const FAST_FIX_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 15000,
  maximumAge: 0,
};

const LIVE_TRACK_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 30000,
  maximumAge: 0,
};

const RECHECK_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 12000,
  maximumAge: 0,
};

const HISTORY_LIMIT = 10;
const MAX_ACCEPTED_ACCURACY_METERS = 1500;
const TARGET_ACCURACY_METERS = 45;
const UPDATE_THROTTLE_MS = 500;
const STALE_AFTER_MS = 30000;
const SAMPLE_RETENTION_MS = 20000;
const MIN_DISTANCE_FOR_NOISE_FILTER_METERS = 2;
const RECHECK_DELAY_MS = 4500;

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function distanceInMeters(a: GeoPoint, b: GeoPoint) {
  const earthRadius = 6371000;
  const latDelta = toRadians(b.lat - a.lat);
  const lngDelta = toRadians(b.lng - a.lng);
  const latA = toRadians(a.lat);
  const latB = toRadians(b.lat);

  const h =
    Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
    Math.cos(latA) * Math.cos(latB) * Math.sin(lngDelta / 2) * Math.sin(lngDelta / 2);

  return 2 * earthRadius * Math.asin(Math.sqrt(h));
}

function normalizeErrorMessage(error: GeolocationPositionError) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return "Standortzugriff wurde blockiert. Bitte im Browser freigeben.";
    case error.POSITION_UNAVAILABLE:
      return "Standort aktuell nicht verfugbar. Bitte erneut versuchen.";
    case error.TIMEOUT:
      return "Standortbestimmung dauert zu lange. Wir versuchen es weiter.";
    default:
      return "Unbekannter Standortfehler. Bitte erneut versuchen.";
  }
}

function smoothedPoint(points: GeoPoint[]) {
  const recentPoints = points.filter((sample) => Date.now() - sample.timestamp <= SAMPLE_RETENTION_MS);
  const source = recentPoints.length > 0 ? recentPoints : points;

  const sortedByAccuracy = [...source].sort((a, b) => a.accuracy - b.accuracy || b.timestamp - a.timestamp);
  const bestSample = sortedByAccuracy[0];
  const accuracyWindow = Math.max(bestSample.accuracy * 1.8, 120);
  const topCandidates = sortedByAccuracy
    .filter((sample) => sample.accuracy <= accuracyWindow)
    .slice(0, 4);

  const weighted = topCandidates.reduce(
    (acc, sample) => {
      const weight = 1 / Math.pow(Math.max(sample.accuracy, 6), 1.35);
      return {
        lat: acc.lat + sample.lat * weight,
        lng: acc.lng + sample.lng * weight,
        weight: acc.weight + weight,
      };
    },
    { lat: 0, lng: 0, weight: 0 }
  );

  const latestTimestamp = Math.max(...topCandidates.map((sample) => sample.timestamp));

  return {
    lat: weighted.lat / weighted.weight,
    lng: weighted.lng / weighted.weight,
    accuracy: bestSample.accuracy,
    timestamp: latestTimestamp,
  } satisfies GeoPoint;
}

export function LocationDirections({ destinationQuery, fallbackMapsUrl }: LocationDirectionsProps) {
  const [status, setStatus] = useState<GeoStatus>("idle");
  const [point, setPoint] = useState<GeoPoint | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [clock, setClock] = useState(() => Date.now());

  const watchIdRef = useRef<number | null>(null);
  const recheckTimerRef = useRef<number | null>(null);
  const samplesRef = useRef<GeoPoint[]>([]);
  const lastEmitRef = useRef(0);
  const latestPointRef = useRef<GeoPoint | null>(null);
  const consumePositionRef = useRef<(position: GeolocationPosition) => void>(() => {});
  const handleWatchErrorRef = useRef<(error: GeolocationPositionError) => void>(() => {});

  const clearRecheckTimer = useCallback(() => {
    if (recheckTimerRef.current !== null) {
      window.clearTimeout(recheckTimerRef.current);
      recheckTimerRef.current = null;
    }
  }, []);

  const schedulePreciseRecheck = useCallback(
    (currentAccuracy: number) => {
      if (currentAccuracy <= TARGET_ACCURACY_METERS) {
        clearRecheckTimer();
        return;
      }

      if (typeof navigator === "undefined" || !navigator.geolocation || recheckTimerRef.current !== null) {
        return;
      }

      recheckTimerRef.current = window.setTimeout(() => {
        recheckTimerRef.current = null;
        navigator.geolocation.getCurrentPosition(
          (position) => consumePositionRef.current(position),
          (error) => handleWatchErrorRef.current(error),
          RECHECK_OPTIONS
        );
      }, RECHECK_DELAY_MS);
    },
    [clearRecheckTimer]
  );

  const stopWatching = useCallback(() => {
    clearRecheckTimer();
    if (watchIdRef.current !== null && typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.clearWatch(watchIdRef.current);
    }
    watchIdRef.current = null;
  }, [clearRecheckTimer]);

  const handleWatchError = useCallback(
    (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        stopWatching();
        setStatus("denied");
      } else if (!latestPointRef.current) {
        setStatus("error");
      }
      setErrorMessage(normalizeErrorMessage(error));
    },
    [stopWatching]
  );

  const consumePosition = useCallback(
    (position: GeolocationPosition) => {
      const nextPoint: GeoPoint = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: Math.max(position.coords.accuracy || MAX_ACCEPTED_ACCURACY_METERS, 1),
        timestamp: position.timestamp || Date.now(),
      };

      if (!Number.isFinite(nextPoint.lat) || !Number.isFinite(nextPoint.lng)) {
        return;
      }

      if (nextPoint.accuracy > MAX_ACCEPTED_ACCURACY_METERS) {
        return;
      }

      const now = Date.now();
      const previous = latestPointRef.current;

      samplesRef.current = [...samplesRef.current.slice(-(HISTORY_LIMIT - 1)), nextPoint];
      const smooth = smoothedPoint(samplesRef.current);
      const improvedAccuracy = previous ? previous.accuracy - smooth.accuracy > 5 : true;

      if (now - lastEmitRef.current < UPDATE_THROTTLE_MS && !improvedAccuracy) {
        schedulePreciseRecheck(smooth.accuracy);
        return;
      }

      if (previous) {
        const delta = distanceInMeters(previous, smooth);
        const clearlyWorse = smooth.accuracy > previous.accuracy + 15;

        if (delta < MIN_DISTANCE_FOR_NOISE_FILTER_METERS && clearlyWorse) {
          schedulePreciseRecheck(smooth.accuracy);
          return;
        }
      }

      lastEmitRef.current = now;
      latestPointRef.current = smooth;
      setPoint(smooth);
      setStatus("tracking");
      setErrorMessage(null);
      schedulePreciseRecheck(smooth.accuracy);
    },
    [schedulePreciseRecheck]
  );

  useEffect(() => {
    handleWatchErrorRef.current = handleWatchError;
  }, [handleWatchError]);

  useEffect(() => {
    consumePositionRef.current = consumePosition;
  }, [consumePosition]);

  const requestLocation = useCallback(() => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      setStatus("unsupported");
      setErrorMessage("Dieser Browser unterstutzt keine Standortfunktion.");
      return;
    }

    setStatus("requesting");
    setErrorMessage(null);

    navigator.geolocation.getCurrentPosition(consumePosition, handleWatchError, FAST_FIX_OPTIONS);

    if (watchIdRef.current === null) {
      watchIdRef.current = navigator.geolocation.watchPosition(consumePosition, handleWatchError, LIVE_TRACK_OPTIONS);
    }
  }, [consumePosition, handleWatchError]);

  useEffect(() => {
    return () => {
      stopWatching();
      clearRecheckTimer();
    };
  }, [clearRecheckTimer, stopWatching]);

  useEffect(() => {
    if (!point) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setClock(Date.now());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [point]);

  const isStale = point ? clock - point.timestamp > STALE_AFTER_MS : false;

  const statusText = useMemo(() => {
    if (status === "unsupported") {
      return "Standort wird von diesem Browser nicht unterstutzt.";
    }
    if (status === "denied") {
      return "Standortzugriff ist blockiert. Bitte im Browser freigeben und erneut starten.";
    }
    if (status === "requesting") {
      return "Standort wird ermittelt ...";
    }
    if (status === "tracking" && isStale) {
      return "Signal ist gerade schwach, wir aktualisieren den Standort weiter.";
    }
    if (status === "tracking") {
      if (!point) {
        return "Live-Standort aktiv.";
      }
      if (point.accuracy <= TARGET_ACCURACY_METERS) {
        return "Live-Standort ist prazise. Route kann exakt gestartet werden.";
      }
      return "Live-Standort aktiv. Wir verfeinern die Genauigkeit weiter.";
    }
    if (status === "error") {
      return "Standort aktuell nicht stabil verfugbar. Google Maps kann trotzdem geoffnet werden.";
    }
    return "Fur die beste Route bitte Standortfreigabe aktivieren.";
  }, [isStale, point, status]);

  const directionsUrl = useMemo(() => {
    if (!point) {
      return fallbackMapsUrl;
    }

    const origin = `${point.lat.toFixed(6)},${point.lng.toFixed(6)}`;
    const destination = encodeURIComponent(destinationQuery);

    return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
  }, [destinationQuery, fallbackMapsUrl, point]);

  const accuracyText = useMemo(() => {
    if (!point) {
      return null;
    }

    return `Genauigkeit ca. ${Math.round(point.accuracy)} m`;
  }, [point]);

  const lastUpdate = useMemo(() => {
    if (!point) {
      return null;
    }

    return new Intl.DateTimeFormat("de-AT", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(point.timestamp);
  }, [point]);

  return (
    <div className="mt-4 rounded-2xl border border-slate-300/20 bg-slate-950/35 p-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={requestLocation}
          disabled={status === "requesting"}
          className="secondary-btn inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {point ? <RefreshCw size={15} aria-hidden="true" /> : <LocateFixed size={15} aria-hidden="true" />}
          {point ? "Standort aktualisieren" : "Meinen Standort nutzen"}
        </button>

        <Link
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="primary-btn inline-flex items-center gap-2"
        >
          <Navigation size={15} aria-hidden="true" />
          {point ? "Route von meinem Standort" : "Route in Google Maps"}
        </Link>
      </div>

      <p className="mt-3 text-xs text-muted">{statusText}</p>

      {point ? (
        <p className="mt-2 text-xs text-muted">
          {accuracyText} - letzte Aktualisierung um {lastUpdate} Uhr
        </p>
      ) : null}

      {errorMessage ? (
        <p className="mt-3 inline-flex items-center gap-2 text-xs text-amber-200/90">
          <AlertTriangle size={14} aria-hidden="true" />
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
