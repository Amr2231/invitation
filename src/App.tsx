import { useRef, useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import EnvelopePage from "./components/EnvelopePage";
import MainPage from "./pages/MainPage";
import { SONG_URL } from "./constants/data";

export default function App() {
  const [entered, setEntered] = useState(false);
  // ref واحد للأغنية يتشارك بين EnvelopePage و MusicPlayer
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    // المستخدم ضغط Open — ابدأ الأغنية فوراً لأن ده user interaction
    if (audioRef.current) {
      audioRef.current.currentTime = 60;
      audioRef.current.play().catch(() => {});
    }
    setEntered(true);
  };

  return (
    <LazyMotion features={domAnimation}>
      {/* audio element موجود دايماً عشان preload="metadata" يشتغل من أول لحظة */}
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
