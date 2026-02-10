import Hero from "../components/Hero";
import SneakPeek from "../components/SneakPeek";
import LocationSection from "../components/LocationSection";
import Countdown from "../components/Countdown";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <SneakPeek />
      <LocationSection />
      <Countdown />
      <InfoSection />
    </div>
  );
};

export default Home;
