export default function FloatingPetals({ count = 18 }: { count?: number }) {
  // generate petal data
  const petals = Array.from({ length: count }, (_, i) => i);

  // animate petals with CSS
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {petals.map((i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${(i * 7 + 5) % 95}%`,
            top: `-20px`,
            animationDuration: `${7 + (i % 6) * 2}s`,
            animationDelay: `${(i * 1.3) % 10}s`,
            width: `${8 + (i % 4) * 4}px`,
            height: `${10 + (i % 4) * 5}px`,
            opacity: 0.5 + (i % 3) * 0.15,
          }}
        />
      ))}
    </div>
  );
}
