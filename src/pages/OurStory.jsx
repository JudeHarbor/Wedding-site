import "./OurStory.css";
import story1 from "../assets/kiah/kiah10.jpeg";
import story2 from "../assets/kiah/kiah11.jpeg";
import story3 from "../assets/kiah/kiah12.jpeg";
import story4 from "../assets/kiah/kiah1.jpeg";
import story5 from "../assets/kiah/kiah2.jpeg";

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
              From the dawn of a new day, what began as a simple hello slowly
              grew into a friendship—and a love—meant to last forever. What
              started small carried meaning from the very beginning, even before
              we understood where it would lead.
            </p>
            <div className="images">
              <img src={story2} alt="Story 2" loading="lazy" />
              <img src={story3} alt="Story 3" loading="lazy" />
            </div>
          </div>
        </div>
        <h1 className="bg-name">SONIA & KIAH</h1>
      </section>

      <section className="story-second reveal">
        <div className="flex">
          <p>
            We met without truly meeting, connected before we ever realized it.
            Our paths crossed for the first time at a friend’s wedding, where we
            celebrated their love, unaware that one day it would be our own turn
            to stand in that moment.
          </p>
          <img src={story4} alt="Story 4" loading="lazy" />
        </div>
      </section>

      <section className="story-third reveal">
        <div className="flex">
          <div className="text-content">
            <p>
              What started with a greeting became shared conversations, gentle
              laughter, and hearts finding their way to one another. With every
              exchange, the connection deepened, growing naturally and
              effortlessly.
            </p>
            <p>
              From a simple “hello,” we now walk hand in hand, ready to embrace
              the future together. This is our story—where hello became forever.
            </p>
          </div>
          <img src={story5} alt="Story 5" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default OurStory;
