"use client";

const particles = Array.from({ length: 26 }, (_, index) => {
  const left = ((index * 37) % 100) + 0.2;
  const delay = ((index * 0.57) % 8) * -1;
  const duration = 10 + ((index * 1.27) % 8);
  const size = 2 + (index % 3);

  return { left, delay, duration, size };
});

export function SnowParticles() {
  return (
    <div className="snow-layer" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="snow-dot"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}
