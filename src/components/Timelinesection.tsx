import { m } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { EVENT_DETAILS } from "../constants/data";

export default function TimelineSection() {
  const { ref, revealed } = useReveal();

  return (
    <section
      ref={ref}
      className="pt-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fdf6ee 0%, #f9ede0 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="font-script mb-2"
            style={{ fontSize: "1.4rem", color: "#c9a96e" }}
          >
            Save the Date
          </p>
          <h2
            className="font-serif-display font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#3d2a15" }}
          >
            Celebration Details
          </h2>
          <div className="gold-divider w-48 mx-auto mt-4" />
        </m.div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px timeline-line"
            style={{ transform: "translateX(-50%)" }}
          />
          <div className="space-y-12">
            {EVENT_DETAILS.map((event, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={revealed ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <div
                    className="card-glass rounded-2xl p-6 hover-lift"
                    style={{
                      display: "inline-block",
                      minWidth: "240px",
                      maxWidth: "100%",
                    }}
                  >
                    <p
                      className="font-script mb-1"
                      style={{ fontSize: "1.1rem", color: "#c9a96e" }}
                    >
                      {event.label}
                    </p>
                    <p
                      className="font-serif-display font-semibold"
                      style={{ fontSize: "1.1rem", color: "#3d2a15" }}
                    >
                      {event.value}
                    </p>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#8a6a4a",
                        marginTop: "4px",
                        fontStyle: "italic",
                      }}
                    >
                      {event.detail}
                    </p>
                  </div>
                </div>
                <m.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="flex-shrink-0 flex items-center justify-center rounded-full z-10"
                  style={{
                    width: 52,
                    height: 52,
                    background: "linear-gradient(135deg, #c9a96e, #e8c87a)",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(201, 169, 110, 0.5)",
                  }}
                >
                  {event.icon}
                </m.div>
                <div className="flex-1" />
              </m.div>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mt-28 mb-0 "></div>
      </div>
    </section>
  );
}
