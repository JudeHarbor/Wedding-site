import { Link } from "react-router-dom";
import "./InfoSection.css";
import registryImg from "../assets/kiah/kiah17.jpeg";
import dressCodeImg from "../assets/kiah/kiah18.jpeg";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-card">
        <Link to="/faq#gifts">
          <h2>GIFTS</h2>
        </Link>
        <Link to="/faq#gifts">
          <div className="image-wrap">
            <img src={registryImg} alt="Gifts" />
          </div>
        </Link>
        <p>
          While your presence at our wedding is the greatest gift, if you wish
          to share in our joy through a gift, please visit our section for it.
        </p>
        <Link to="/faq#gifts">
          <button>GIFTS</button>
        </Link>
      </div>

      <div className="info-card">
        <Link to="/faq#dress-code">
          <h2>DRESS CODE</h2>
        </Link>
        <Link to="/faq#dress-code">
          <div className="image-wrap">
            <img src={dressCodeImg} alt="Dress Code" />
          </div>
        </Link>
        <p>
          We kindly ask our guests to dress in elegant attire in the following
          color palette: <span className="color-brown">Brown</span>,{" "}
          <span className="color-ivory">Ivory</span>, and{" "}
          <span className="color-burgundy">Burgundy (Wine)</span>.
        </p>
        <Link to="/faq#dress-code">
          <button>FAQS</button>
        </Link>
      </div>

      <div className="story-cta-section reveal">
        <Link to="/ourstory" className="story-button">
          OUR STORY
          <span className="button-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default InfoSection;
