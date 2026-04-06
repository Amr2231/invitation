import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { ENGAGEMENT_DATE } from "../constants/data";

// helper function
function getTimeLeft() {
  // Calculate time left until engagement date
  const now = new Date();
  const diff = ENGAGEMENT_DATE.getTime() - now.getTime();
  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    passed: false,
  };
}

// component
export default function CountdownSection() {
  // hooks
  const { ref, revealed } = useReveal();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  // update time left every second
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  // dummy data
  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  // render
  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a0e05 0%, #2d1a0a 100%)",
      }}
    >
      {/* Text */}
      <div
        className="max-w-4xl mx-auto px-6 text-center relative"
        style={{ zIndex: 2 }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p
            className="font-script mb-2"
            style={{ fontSize: "1.4rem", color: "#c9a96e" }}
          >
            {timeLeft.passed ? "The moment has arrived!" : "Counting down to"}
          </p>
          <h2
            className="font-serif-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "rgba(230, 210, 180, 0.95)",
            }}
          >
            Our Special Day
          </h2>
          <div className="gold-divider w-48 mx-auto mt-4" />
        </motion.div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={revealed ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: "backOut",
              }}
              className="flex flex-col items-center"
            >
              {/* Card */}
              <div
                className="card-glass rounded-2xl flex items-center justify-center relative overflow-hidden hover-lift"
                style={{
                  width: "clamp(80px, 18vw, 110px)",
                  height: "clamp(80px, 18vw, 110px)",
                  background: "rgba(255, 250, 240, 0.07)",
                  border: "1px solid rgba(201, 169, 110, 0.4)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201, 169, 110, 0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Value */}
                <motion.span
                  key={unit.value}
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="gradient-gold font-serif-display font-bold"
                  style={{
                    fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                    lineHeight: 1,
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </div>
              {/* Label */}
              <p
                className="font-serif-display mt-3"
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(201, 169, 110, 0.7)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={revealed ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10"
        >
          <p
            className="font-script"
            style={{ fontSize: "1.6rem", color: "rgba(201, 169, 110, 0.8)" }}
          >
            Saturday, April 19th, 2025 — 7:00 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}
