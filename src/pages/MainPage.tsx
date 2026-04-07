import { lazy, Suspense } from "react";
import FloatingPetals from "../components/Floatingpetals";
import HeroSection from "../components/HeroSection";

const CountdownSection = lazy(() => import("../components/Countdownsection"));
const TimelineSection = lazy(() => import("../components/Timelinesection"));
const LocationSection = lazy(() => import("../components/Locationsection"));
const ThankYouSection = lazy(() => import("../components/Thankyousection"));
const Footer = lazy(() => import("../components/Footer"));
const MusicPlayer = lazy(() => import("../components/Musicplayer"));

interface MainPageProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function MainPage({ audioRef }: MainPageProps) {
  return (
    <div className="relative">
      <FloatingPetals />
      <HeroSection />
      <Suspense fallback={null}>
        <CountdownSection />
        <TimelineSection />
        <LocationSection />
        <ThankYouSection />
        <Footer />
        <MusicPlayer audioRef={audioRef} />
      </Suspense>
    </div>
  );
}
