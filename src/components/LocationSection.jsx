import "./LocationSection.css";
import locationImg from "../assets/kiah/kiah5.jpg";

const LocationSection = () => {
  const ceremonyURL =
    "https://www.google.com/maps/search/?api=1&query=Kingdom+Hall+of+Jehovah’s+Witnesses,+42+Uyigue+Street,+Off+College+Road,+Aduwawa,+Benin+City,+Edo+State,+Nigeria";
  const receptionURL =
    "https://www.google.com/maps/search/?api=1&query=Jahbless+Event+Center,+WAEC+Road,+Benin–Auchi+Road,+Benin+City,+Edo+State,+Nigeria";

  return (
    <section className="location">
      <div className="text-up">
        <p>LOCATION</p>
      </div>
      <div className="flex">
        {/* Ceremony Link - Left Side */}
        <a
          href={ceremonyURL}
          target="_blank"
          rel="noopener noreferrer"
          className="location-link ceremony-link"
        >
          <div className="text">
            <p className="top">KINGDOM HALL</p>
            <p>JEHOVAH’S WITNESSES</p>
          </div>
        </a>

        {/* Central Image */}
        <div className="img-wrap">
          <img src={locationImg} alt="Wedding Venue" loading="lazy" />
        </div>

        {/* Reception Link - Right Side */}
        <a
          href={receptionURL}
          target="_blank"
          rel="noopener noreferrer"
          className="location-link reception-link"
        >
          <div className="text" style={{ textAlign: "right" }}>
            <p className="top">JAHBLESS</p>
            <p>EVENT CENTER</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
