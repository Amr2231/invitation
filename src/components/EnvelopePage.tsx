import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Music } from "lucide-react";

// interface for props
interface EnvelopePageProps {
  onEnter: () => void;
}

// song url and text
const SONG_URL =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const words = ["Welcome", "To", "Our", "Engagement", "Celebration"];

// envelope page component
export default function EnvelopePage({ onEnter }: EnvelopePageProps) {
  // hooks
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  // animate envelope opening and card appearance
  useEffect(() => {
    const t1 = setTimeout(() => setEnvelopeOpen(true), 800);
    const t2 = setTimeout(() => setCardVisible(true), 1800);
    const t3 = setTimeout(() => setTextVisible(true), 2600);
    const t4 = setTimeout(() => setButtonVisible(true), 4500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // animate text word by word
  useEffect(() => {
    if (!textVisible) return;
    words.forEach((_, i) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, i]);
      }, i * 400);
    });
  }, [textVisible]);

  // handle open button click
  const handleOpen = () => {
    if (audioRef.current && !audioStarted) {
      audioRef.current.play().catch(() => {});
      setAudioStarted(true);
    }
    onEnter();
  };

  // petal animation data
  const petals = Array.from({ length: 12 }, (_, i) => i);

  // render
  return (
    <div className="min-h-screen bg-beige-warm flex items-center justify-center overflow-hidden relative">
      {/* audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src={SONG_URL} type="audio/mpeg" />
      </audio>

      {/* petals */}
      {petals.map((i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            animationDuration: `${5 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 6}s`,
            transform: `scale(${0.5 + Math.random() * 1.5})`,
          }}
        />
      ))}

      {/* envelope */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
            style={{
              fontSize: `${20 + i * 15}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div
        className="envelope-container flex flex-col items-center"
        style={{ zIndex: 10 }}
      >
        {/* card */}
        <AnimatePresence>
          {cardVisible && (
            <motion.div
              initial={{ y: 220, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card-glass rounded-2xl p-8 flex flex-col items-center mb-4"
              style={{
                width: "320px",
                minHeight: "260px",
                position: "relative",
                zIndex: 20,
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,248,235,0.3) 100%)",
                  borderRadius: "inherit",
                }}
              />

              <motion.div
                className="animate-heartbeat mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Heart
                  size={32}
                  style={{ fill: "#c4845a", stroke: "#c4845a" }}
                />
              </motion.div>

              <div className="min-h-[80px] flex flex-wrap justify-center gap-x-2 items-center mb-3">
                {words.map((word, i) => (
                  <AnimatePresence key={i}>
                    {visibleWords.includes(i) && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="font-script"
                        style={{
                          fontSize: "1.9rem",
                          color: i === 3 || i === 4 ? "#b8893d" : "#7a5c3a",
                          lineHeight: 1.3,
                        }}
                      >
                        {word}
                      </motion.span>
                    )}
                  </AnimatePresence>
                ))}
              </div>

              <div className="gold-divider w-full my-3" />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: visibleWords.length === words.length ? 1 : 0,
                }}
                transition={{ duration: 0.8 }}
                className="font-script text-center mb-5"
                style={{
                  fontSize: "1.8rem",
                  color: "#b8893d",
                  letterSpacing: "0.05em",
                }}
              >
                Adham &amp; Nour
              </motion.p>

              <AnimatePresence>
                {buttonVisible && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleOpen}
                    className="sparkle-btn flex items-center gap-2 px-7 py-3 rounded-full font-serif-display font-medium text-white relative overflow-hidden animate-glow-pulse"
                    style={{
                      background:
                        "linear-gradient(135deg, #c9a96e, #e8c87a, #b8893d)",
                      fontSize: "1.05rem",
                      letterSpacing: "0.12em",
                      boxShadow: "0 8px 25px rgba(180, 130, 90, 0.4)",
                    }}
                  >
                    <Music size={16} />
                    Open
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
          style={{ width: "340px", height: "240px" }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #f5e6d0 0%, #eddcbf 40%, #e8d4ae 100%)",
              border: "2px solid rgba(201, 169, 110, 0.5)",
              boxShadow:
                "0 30px 60px rgba(180, 130, 90, 0.3), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          />
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, transparent 49.5%, rgba(201,169,110,0.25) 50%, transparent 50.5%)",
              }}
            />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 6 }}
          >
            {/* Heart */}
            <motion.div
              className="font-script text-amber-700/60 text-5xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ♡
            </motion.div>
          </div>
          {/* Envelope Flap */}
          <motion.div
            className="absolute left-0 right-0"
            style={{
              top: 0,
              height: "50%",
              background: "linear-gradient(135deg, #eddcbf 0%, #e0ca9c 100%)",
              borderRadius: "16px 16px 0 0",
              borderBottom: "1px solid rgba(201,169,110,0.4)",
              transformOrigin: "top center",
              zIndex: 10,
            }}
            initial={{ rotateX: 0 }}
            animate={envelopeOpen ? { rotateX: -160 } : { rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Flap shadow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, transparent 49%, rgba(201,169,110,0.3) 50%, transparent 51%)",
                borderRadius: "inherit",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
