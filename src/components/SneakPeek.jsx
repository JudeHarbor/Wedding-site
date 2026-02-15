import "./SneakPeek.css";
import bgImg from "../assets/kiah/kiah4.jpg";

const SneakPeek = () => {
  const ceremonyURL =
    "https://www.google.com/maps/search/?api=1&query=Kingdom+Hall+of+Jehovah's+Witnesses,+42+Uyigue+Street,+Off+College+Road,+Aduwawa,+Benin+City,+Edo+State,+Nigeria";
  const receptionURL =
    "https://www.google.com/maps/search/?api=1&query=Jahbless+Event+Center,+WAEC+Road,+Benin–Auchi+Road,+Benin+City,+Edo+State,+Nigeria";

  return (
    <section className="sneak" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="overlay">
        <p>HERE'S A SNEAK PEAK OF</p>
        <h1 className="top">
          OUR SPECIAL DAY'S <br /> SCHEDULE
        </h1>
        <div className="flex">
          <a
            href={ceremonyURL}
            target="_blank"
            rel="noopener noreferrer"
            className="col reveal"
          >
            <h1>11:00 AM</h1>
            <p>WEDDING DISCOURSE</p>
          </a>
          <a
            href={receptionURL}
            target="_blank"
            rel="noopener noreferrer"
            className="col reveal"
          >
            <h1>1:00 PM</h1>
            <p>RECEPTION</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
