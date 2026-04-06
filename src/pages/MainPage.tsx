import FloatingPetals from "../components/FloatingPetals";
import HeroSection from "../components/HeroSection";
import CountdownSection from "../components/CountdownSection";
import TimelineSection from "../components/TimelineSection";
import LocationSection from "../components/LocationSection";
import ThankYouSection from "../components/ThankYouSection";
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
