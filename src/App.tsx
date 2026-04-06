import { useState } from "react";
import EnvelopePage from "./components/EnvelopePage";
import MainPage from "./pages/MainPage";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleEnter = () => {
    setMusicStarted(true); // autoplay allowed
    setEntered(true);
  };

  return (
    <>
      {!entered ? <EnvelopePage onEnter={handleEnter} /> : <MainPage />}
      {/* music player */}
      {musicStarted && <MusicPlayer />}
    </>
  );
}
