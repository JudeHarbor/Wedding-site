import "./SneakPeek.css";
import bgImg from "../assets/kiah/kiah4.jpeg";

const SneakPeek = () => {
  return (
    <section className="sneak" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="overlay">
        <p>HERE'S A SNEAK PEAK OF</p>
        <h1 className="top">
          OUR SPECIAL DAY'S <br /> SCHEDULE
        </h1>
        <div className="flex">
          <div className="col">
            <h1>11:00 AM</h1>
            <p>CEREMONY</p>
          </div>
          <img
            src={bgImg}
            alt="Sonia & Hezekiah Moment"
            className="sneak-peek-img"
            loading="lazy"
          />
          <div className="col">
            <h1>1:00 PM</h1>
            <p>RECEPTION</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
