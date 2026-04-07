import { m } from "framer-motion";
import { MapPin } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { VENUE } from "../constants/data";

export default function LocationSection() {
  const { ref, revealed } = useReveal();

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f9ede0 0%, #f5e6d0 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="font-script mb-2"
            style={{ fontSize: "1.4rem", color: "#c9a96e" }}
          >
            Find Us Here
          </p>
          <h2
            className="font-serif-display font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#3d2a15" }}
          >
            Venue Location
          </h2>
          <div className="gold-divider w-48 mx-auto mt-4 mb-6" />
          <p
            style={{
              fontStyle: "italic",
              color: "#7a5c3a",
              fontSize: "1.05rem",
            }}
          >
            {VENUE.name}, {VENUE.city}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="card-glass rounded-3xl overflow-hidden hover-lift"
          style={{
            boxShadow: "0 30px 60px rgba(180, 130, 90, 0.25)",
            border: "2px solid rgba(201, 169, 110, 0.4)",
          }}
        >
          <div
            className="flex items-center gap-3 px-6 py-4"
            style={{ borderBottom: "1px solid rgba(201, 169, 110, 0.3)" }}
          >
            <MapPin size={20} style={{ color: "#c9a96e" }} />
            <span
              className="font-serif-display font-semibold"
              style={{ color: "#3d2a15", fontSize: "1rem" }}
            >
              {VENUE.name}
            </span>
          </div>
          <div
            className="relative"
            style={{ paddingBottom: "45%", minHeight: 280 }}
          >
            <iframe
              src={VENUE.embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "sepia(0.15) saturate(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        >
          <a
            href={VENUE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full font-serif-display text-white font-medium hover-lift"
            style={{
              background: "linear-gradient(135deg, #c9a96e, #e8c87a)",
              boxShadow: "0 6px 20px rgba(180, 130, 90, 0.35)",
              letterSpacing: "0.08em",
              textDecoration: "none",
            }}
          >
            <MapPin size={16} />
            Open in Google Maps
          </a>
        </m.div>
      </div>
    </section>
  );
}
