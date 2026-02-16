import "./Hero.css";
import sideImg1 from "../assets/kiah/sonia1.jpeg";
import mainImg from "../assets/kiah/kiah2.jpg";
import sideImg2 from "../assets/kiah/kiah13.jpeg";

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
        <p>
          We're excited to celebrate our love with you on this special day,
          grateful for your love and support, and can't wait to celebrate
          together.
        </p>
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
