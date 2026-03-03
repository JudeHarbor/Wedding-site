import "./LocationSection.css";
import locationImg from "../assets/kiah/kiah15.jpeg";

const LocationSection = () => {
  const rsvpURL = "https://wa.me/qr/RBYDO7NRPCDQE1";

  return (
    <section className="location">
      <div className="text-up">
        <p>RSVP</p>
      </div>
      <div className="flex">
        {/* Central Image */}
        <div className="img-wrap">
          <img src={locationImg} alt="Wedding" loading="lazy" />
        </div>
      </div>

      <a
        href={rsvpURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className="black">CONTACT RSVP</button>
      </a>
    </section>
  );
};

export default LocationSection;
