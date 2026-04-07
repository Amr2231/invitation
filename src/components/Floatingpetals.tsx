import { useMemo } from "react";

// component for floating petals animation
export default function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${(i * 7 + 5) % 95}%`,
        animationDuration: `${7 + (i % 6) * 2}s`,
        animationDelay: `${(i * 1.3) % 10}s`,
        width: `${8 + (i % 4) * 4}px`,
        height: `${10 + (i % 4) * 5}px`,
        opacity: 0.5 + (i % 3) * 0.15,
      })),
    [count],
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {petals.map((style, i) => (
        <div key={i} className="petal" style={{ ...style, top: "-20px" }} />
      ))}
    </div>
  );
}
