import { m } from "framer-motion";
import { Heart } from "lucide-react";
import { Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { COUPLE } from "../constants/data";

export default function ThankYouSection() {
  const { ref, revealed } = useReveal();

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f5e6d0 0%, #1a0e05 100%)",
      }}
    >
      <div
        className="max-w-3xl mx-auto px-6 text-center relative"
        style={{ zIndex: 2 }}
      >
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "backOut" }}
          className="mb-8"
        >
          <div className="flex justify-center gap-3 mb-4">
            {([Heart, Sparkles, Heart] as const).map((Icon, i) => (
              <m.div
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
              </m.div>
            ))}
          </div>
        </m.div>

        <m.h2
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#c9a96e" }}
        >
          Thank You
        </m.h2>

        <m.div
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
        </m.div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e72] to-transparent mt-28 relative top-28 mb-0 "></div>
    </section>
  );
}
