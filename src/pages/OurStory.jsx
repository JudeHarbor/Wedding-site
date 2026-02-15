import "./OurStory.css";
import story1 from "../assets/kiah/kiah10.jpg";
import story2 from "../assets/kiah/kiah11.jpg";
import story3 from "../assets/kiah/kiah12.jpg";
import story4 from "../assets/kiah/kiah1.jpg";
import story5 from "../assets/kiah/kiah2.jpg";

const OurStory = () => {
  return (
    <div className="our-story-page">
      <section className="story-hero">
        <div className="head-text">
          <h1>OUR STORY</h1>
        </div>
        <div className="flex">
          <div className="main-image">
            <img src={story1} alt="Story 1" loading="lazy" />
          </div>
          <div className="side">
            <p>
              "Whatever our souls are made of, his and mine are the same." True
              love is a journey that starts with a simple hello and grows into a
              lifetime of shared dreams, whispered promises, and a connection
              that transcends time.
            </p>
            <div className="images">
              <img src={story2} alt="Story 2" loading="lazy" />
              <img src={story3} alt="Story 3" loading="lazy" />
            </div>
          </div>
        </div>
        <h1 className="bg-name">SONIA & KIAH</h1>
      </section>

      <section className="story-split reveal">
        <div className="flex">
          <div className="image-side">
            <img src={story4} alt="Our Story" loading="lazy" />
          </div>
          <div className="text-side quote">
            <p>
              "From the dawn of a new day, what began as a simple hello slowly
              grew into a friendship—and a love—meant to last forever. What
              started small carried meaning from the very beginning, even before
              we understood where it would lead."
              <p>
                "We met without truly meeting, connected before we ever realized
                it. Our paths crossed for the first time at a friend’s wedding,
                where we celebrated their love, unaware that one day it would be
                our own turn to stand in that moment."
              </p>
            </p>
            <span className="attribution">— HEZEKIAH</span>
          </div>
        </div>
      </section>

      <section className="story-split reverse reveal">
        <div className="flex">
          <div className="text-side quote">
            <p>
              "What started with a greeting became shared conversations, gentle
              laughter, and hearts finding their way to one another. With every
              exchange, the connection deepened, growing naturally and
              effortlessly."
            </p>
            <p>
              "From a simple “hello,” we now walk hand in hand, ready to embrace
              the future together. This is our story—where hello became
              forever."
            </p>
            <span className="attribution">— SONIA</span>
          </div>
          <div className="image-side">
            <img src={story4} alt="Our Story" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="story-final reveal">
        <div className="container">
          <img src={story5} alt="Sonia & Kiah Forever" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default OurStory;
