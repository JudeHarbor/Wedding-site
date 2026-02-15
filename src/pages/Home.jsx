import Hero from "../components/Hero";
import SneakPeek from "../components/SneakPeek";
import LocationSection from "../components/LocationSection";
import Countdown from "../components/Countdown";
import InfoSection from "../components/InfoSection";
import FloatingTimer from "../components/FloatingTimer";

const Home = () => {
  return (
    <div className="home-page">
      <FloatingTimer />
      <Hero />
      <div className="reveal">
        <SneakPeek />
      </div>
      <div className="reveal">
        <LocationSection />
      </div>
      <Countdown />
      <div className="reveal">
        <InfoSection />
      </div>
    </div>
  );
};

export default Home;
