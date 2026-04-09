import FloatingPetals from "../components/Floatingpetals";
import HeroSection from "../components/HeroSection";
import CountdownSection from "../components/Countdownsection";
import TimelineSection from "../components/Timelinesection";
import LocationSection from "../components/Locationsection";
import ThankYouSection from "../components/Thankyousection";
import Footer from "../components/Footer";
import MusicPlayer from "../components/Musicplayer";

interface MainPageProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function MainPage({ audioRef }: MainPageProps) {
  return (
    <div className="relative">
      <FloatingPetals />
      <HeroSection />
      <CountdownSection />
      <TimelineSection />
      <LocationSection />
      <ThankYouSection />
      <Footer />
      <MusicPlayer audioRef={audioRef} />
    </div>
  );
}
