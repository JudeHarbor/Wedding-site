import "./InfoSection.css";
import registryImg from "../assets/kiah/kiah7.jpeg";
import dressCodeImg from "../assets/kiah/kiah9.jpeg";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-card">
        <h2>REGISTRY</h2>
        <div className="image-wrap">
          <img src={registryImg} alt="Registry" />
        </div>
        <p>
          While your presence at our wedding is the greatest gift, if you wish
          to share in our joy through a gift, please visit our registry.
        </p>
        <button>REGISTRY</button>
      </div>

      <div className="info-card">
        <h2>DRESS CODE</h2>
        <div className="image-wrap">
          <img src={dressCodeImg} alt="Dress Code" />
        </div>
        <p>
          For this grand celebration of love, we kindly request that you embrace
          the elegance of the occasion by wearing formal attire.
        </p>
        <button>FAQS</button>
      </div>
    </section>
  );
};

export default InfoSection;
