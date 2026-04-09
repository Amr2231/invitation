import { useRef, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import EnvelopePage from "./components/EnvelopePage";
import MainPage from "./pages/MainPage";
import { SONG_URL } from "./constants/data";

export default function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 104;
      audioRef.current.play().catch(() => {});
    }
    setEntered(true);
  };

  return (
    <LazyMotion features={domAnimation}>
      <audio ref={audioRef} loop preload="metadata">
        <source src={SONG_URL} type="audio/mpeg" />
      </audio>

      {entered ? (
        <MainPage audioRef={audioRef} />
      ) : (
        <EnvelopePage onEnter={handleEnter} />
      )}
    </LazyMotion>
  );
}
