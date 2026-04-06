import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SONG_URL } from "../constants/data";

// component
export default function MusicPlayer() {
  // hooks
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 60;
    audio.play().catch(() => {});
  }, []);

  // toggle play/pause
  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying((prev) => !prev);
  };

  // render
  return (
    <>
      {/* Music */}
      <audio ref={audioRef} loop preload="auto">
        <source src={SONG_URL} type="video/mp4" />
      </audio>

      {/* Player */}
      <div
        className="fixed bottom-6 right-0 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 999 }}
      >
        {/* Vinyl disc */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "none",
            padding: 0,
            cursor: "pointer",
            background: "transparent",
            position: "relative",
          }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {/* Disc */}
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isPlaying
                ? { duration: 3, repeat: Infinity, ease: "linear" }
                : { duration: 0.4, ease: "easeOut" }
            }
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "relative",
              background:
                "conic-gradient(from 0deg, #1a0e05 0%, #2d1a0a 20%, #1a0e05 25%, #2d1a0a 45%, #1a0e05 50%, #2d1a0a 70%, #1a0e05 75%, #2d1a0a 95%, #1a0e05 100%)",
              boxShadow: isPlaying
                ? "0 0 0 2px rgba(201,169,110,0.7), 0 8px 24px rgba(0,0,0,0.6)"
                : "0 0 0 2px rgba(201,169,110,0.35), 0 4px 16px rgba(0,0,0,0.5)",
            }}
          >
            {[14, 20, 26].map((r) => (
              <div
                key={r}
                style={{
                  position: "absolute",
                  inset: r,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,169,110,0.12)",
                  pointerEvents: "none",
                }}
              />
            ))}

            {/* Center label */}
            <div
              style={{
                position: "absolute",
                inset: "30%",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a96e, #b8893d)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#1a0e05",
                }}
              />
            </div>

            {/* Glow pulse */}
            {isPlaying && (
              <motion.div
                animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  border: "2px solid rgba(201,169,110,0.5)",
                  pointerEvents: "none",
                }}
              />
            )}
          </motion.div>
        </motion.button>

        <span
          style={{
            fontSize: "0.65rem",
            color: isPlaying
              ? "rgba(201,169,110,0.8)"
              : "rgba(201,169,110,0.4)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          {isPlaying ? "♪ Playing" : "⏸ Paused"}
        </span>
      </div>
    </>
  );
}
