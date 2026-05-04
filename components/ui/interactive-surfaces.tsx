"use client";

import { useEffect } from "react";

const SELECTOR = ".kinetic-card, .lux-card";

export function InteractiveSurfaces() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 900px)");
    if (!finePointer.matches) return;

    let activeElement: HTMLElement | null = null;
    let frame = 0;

    const resetElement = (element: HTMLElement | null) => {
      if (!element) return;
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
      element.style.removeProperty("--glow-x");
      element.style.removeProperty("--glow-y");
      element.removeAttribute("data-interactive-active");
    };

    const onPointerMove = (event: PointerEvent) => {
      const nextElement = (event.target as Element | null)?.closest(SELECTOR);
      if (!(nextElement instanceof HTMLElement)) {
        resetElement(activeElement);
        activeElement = null;
        return;
      }

      activeElement = nextElement;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (!activeElement) return;

        const rect = activeElement.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const tiltX = (0.5 - y) * 4.5;
        const tiltY = (x - 0.5) * 4.5;

        activeElement.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
        activeElement.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
        activeElement.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
        activeElement.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
        activeElement.setAttribute("data-interactive-active", "true");
      });
    };

    const onPointerLeave = () => {
      resetElement(activeElement);
      activeElement = null;
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      resetElement(activeElement);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return null;
}
