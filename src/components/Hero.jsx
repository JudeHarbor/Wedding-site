import "./Hero.css";
import sideImg1 from "../assets/kiah/kiah1.jpg";
import mainImg from "../assets/kiah/kiah2.jpg";
import sideImg2 from "../assets/kiah/kiah3.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="text">
        <h1>21</h1>
        <h1>·</h1>
        <h1>03</h1>
        <h1>·</h1>
        <h1>2026</h1>
      </div>
      <div className="images">
        <img
          src={sideImg1}
          className="side-image"
          alt="Wedding Side 1"
          loading="lazy"
        />
        <img
          src={mainImg}
          className="main-image"
          alt="Wedding Main"
          loading="lazy"
        />
        <img
          src={sideImg2}
          className="side-image"
          alt="Wedding Side 2"
          loading="lazy"
        />
      </div>
      <div className="motto">
        <h1>JOIN US AS WE EMBARK</h1>
        <h1>ON A JOURNEY OF LOVE,</h1>
        <h1>JOY, AND ETERNAL</h1>
        <h1>HAPPINESS.</h1>
      </div>
      <div className="side-images-mobile-wrap">
        <img
          src={sideImg1}
          className="side-image"
          alt="Wedding Side 1"
          loading="lazy"
        />
        <img
          src={sideImg2}
          className="side-image"
          alt="Wedding Side 2"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
