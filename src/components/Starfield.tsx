import { useMemo } from "react";

export function Starfield() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/70"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationName: "twinkle",
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${star.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
