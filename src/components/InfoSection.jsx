import { Link } from "react-router-dom";
import "./InfoSection.css";
import registryImg from "../assets/kiah/kiah7.jpg";
import dressCodeImg from "../assets/kiah/kiah9.jpg";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-card">
        <Link to="/faq#gifts">
          <h2>REGISTRY</h2>
        </Link>
        <Link to="/faq#gifts">
          <div className="image-wrap">
            <img src={registryImg} alt="Registry" />
          </div>
        </Link>
        <p>
          While your presence at our wedding is the greatest gift, if you wish
          to share in our joy through a gift, please visit our registry.
        </p>
        <Link to="/faq#gifts">
          <button>REGISTRY</button>
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
          For this grand celebration of love, we kindly request that you embrace
          the elegance of the occasion by wearing formal attire.
        </p>
        <Link to="/faq#dress-code">
          <button>FAQS</button>
        </Link>
      </div>
    </section>
  );
};

export default InfoSection;
