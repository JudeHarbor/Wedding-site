import Hero from "../components/Hero";
import SneakPeek from "../components/SneakPeek";
import LocationSection from "../components/LocationSection";
import Countdown from "../components/Countdown";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="reveal">
        <SneakPeek />
      </div>
      <div className="reveal">
        <LocationSection />
      </div>
      <div className="reveal">
        <Countdown />
      </div>
      <div className="reveal">
        <InfoSection />
      </div>
    </div>
  );
};

export default Home;
