import { useEffect, useState } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReveal } from "../hooks/useReveal";
import { COUPLE, HERO_SLIDES } from "../constants/data";

export default function HeroSection() {
  const { ref: heroRef, revealed } = useReveal();
  const { scrollYProgress } = useScroll();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1a0e05 0%, #2d1a0a 100%)",
      }}
    >
      {/* Carousel */}
      <div className="embla absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative flex-shrink-0"
            >
              <m.div style={{ y }} className="absolute inset-0">
                <picture>
                  <source media="(max-width: 768px)" srcSet={slide.mobile} />
                  <img
                    src={slide.desktop}
                    className="w-full h-full object-bottom object-cover"
                    width={1920}
                    height={1080}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    style={{
                      opacity: 0.55,
                      filter: "saturate(1.1) contrast(1.05)",
                    }}
                  />
                </picture>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(26,14,5,0.5), rgba(26,14,5,0.9))",
                  }}
                />
              </m.div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              selectedIndex === index ? "bg-[#c9a96e]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center px-4" style={{ zIndex: 3 }}>
        <m.div
          initial={{ opacity: 0, y: -20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <span
            className="font-script"
            style={{
              fontSize: "1.4rem",
              color: "#c9a96e",
              letterSpacing: "0.1em",
            }}
          >
            {COUPLE.tagline}
          </span>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <h1
            className="font-parisienne gradient-gold"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 1.1 }}
          >
            {COUPLE.name1}
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="gold-divider flex-1" style={{ maxWidth: 120 }} />
            <m.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={28} style={{ fill: "#c4845a", stroke: "#c4845a" }} />
            </m.div>
            <div className="gold-divider flex-1" style={{ maxWidth: 120 }} />
          </div>
          <h1
            className="font-parisienne gradient-rose"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 1.1 }}
          >
            {COUPLE.name2}
          </h1>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 font-script"
          style={{
            fontSize: "2rem",
            color: "rgba(230, 210, 180, 0.9)",
            letterSpacing: "0.05em",
          }}
        >
          {COUPLE.subtitle}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10"
          style={{
            color: "rgba(201, 169, 110, 0.8)",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider w-16" />
            <span className="font-script" style={{ fontSize: "1.2rem" }}>
              Scroll down
            </span>
            <div className="gold-divider w-16" />
          </div>
          <m.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-2"
          >
            ↓
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
