import { useEffect, useRef, useState } from "react";

// hook to reveal section on scroll
export function useReveal(threshold = 0.15) {
  // refs and state
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // intersection observer
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // create observer with threshold and callback to set revealed state
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, revealed };
}
