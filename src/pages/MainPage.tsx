import FloatingPetals from "../components/Floatingpetals";
import HeroSection from "../components/HeroSection";
import CountdownSection from "../components/Countdownsection";
import TimelineSection from "../components/Timelinesection";
import LocationSection from "../components/Locationsection";
import ThankYouSection from "../components/Thankyousection";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div className="relative">
      <FloatingPetals />
      <HeroSection />
      <CountdownSection />
      <TimelineSection />
      <LocationSection />
      <ThankYouSection />
      <Footer />
    </div>
  );
}
