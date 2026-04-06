import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { COUPLE } from "../constants/data";

// component
export default function ThankYouSection() {
  // hooks
  const { ref, revealed } = useReveal();

  // render
  return (
    // Background gradient and padding
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f5e6d0 0%, #1a0e05 100%)",
      }}
    >
      {/* Text */}
      <div
        className="max-w-3xl mx-auto px-6 text-center relative"
        style={{ zIndex: 2 }}
      >
        {/* Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "backOut" }}
          className="mb-8"
        >
          {/* Icons */}
          <div className="flex justify-center gap-3 mb-4">
            {[Heart, Sparkles, Heart].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              >
                <Icon
                  size={i === 1 ? 28 : 22}
                  style={{
                    fill: i === 1 ? "#c9a96e" : "#c4845a",
                    stroke: i === 1 ? "#c9a96e" : "#c4845a",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#c9a96e" }}
        >
          Thank You
        </motion.h2>

        {/* Quote and signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="gold-divider w-48 mx-auto mb-8" />
          <p
            className="font-serif-display leading-relaxed"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "#5a3f22",
              lineHeight: 1.9,
              fontStyle: "italic",
            }}
          >
            "{COUPLE.thankYouQuote}"
          </p>
          <div className="gold-divider w-48 mx-auto mt-8 mb-6" />
          <p
            className="font-script"
            style={{ fontSize: "2rem", color: "#b8893d" }}
          >
            With all our love,
          </p>
          <p
            className="font-script mt-2"
            style={{ fontSize: "2.5rem", color: "#c9a96e" }}
          >
            {COUPLE.name1} & {COUPLE.name2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
