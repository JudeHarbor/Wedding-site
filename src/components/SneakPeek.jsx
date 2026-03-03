import "./SneakPeek.css";
import bgImg from "../assets/kiah/kiah14.jpeg";

const SneakPeek = () => {
  const rsvpURL = "https://wa.me/qr/RBYDO7NRPCDQE1";

  return (
    <section className="sneak" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="overlay">
        <p>HERE'S A SNEAK PEAK OF</p>
        <h1 className="top">
          OUR SPECIAL DAY'S <br /> SCHEDULE
        </h1>
        <div className="flex">
          <a
            href={rsvpURL}
            target="_blank"
            rel="noopener noreferrer"
            className="col reveal"
          >
            <h1>11:00 AM</h1>
            <p>WEDDING DISCOURSE</p>
          </a>
          <a
            href={rsvpURL}
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
