import { useEffect } from "react";
import "./FAQ.css";
import faqBg from "../assets/kiah/kiah7.jpg";

const FAQ = () => {
  const faqData = [
    {
      category: "DRESS CODE",
      questions: [
        {
          question: "",
          answer:
            "We kindly ask our guests to dress in elegant attire in the following color palette: Brown, Ivory, and Burgundy (Wine).\n\nChoose any shade within these tones and come looking your absolute best as we celebrate this special day together.",
        },
      ],
    },
    {
      category: "CHILDREN",
      questions: [
        {
          question: "",
          answer:
            "Children are warmly welcome. We kindly encourage parents and guardians to supervise their kids throughout the event to ensure they have a safe and enjoyable experience.",
        },
      ],
    },
    {
      category: "TIME",
      questions: [
        {
          question: "",
          answer:
            "The ceremony will begin promptly at the stated time. We encourage guests to arrive at least 30 minutes early.",
        },
      ],
    },
    {
      category: "VENUE & PARKING",
      questions: [
        {
          question: "",
          answer:
            "Kindly check your invitation for the full venue address. Parking will be available at the venue. Please arrive early for easier access.",
        },
      ],
    },
    {
      category: "GIFTS",
      questions: [
        {
          question: "",
          answer:
            "Your presence is the greatest gift. However, if you wish to bless us, we will appreciate monetary gifts.\n\n8082559888\nOpay\nHezekiah Ogbeide\n\n2117618015\nZenith Bank\nHezekiah Ogbeide",
        },
      ],
    },
    {
      category: "OUT-OF-TOWN GUESTS",
      questions: [
        {
          question: "",
          answer:
            "If you are traveling in, we recommend contacting the RSVP for accommodation booking and support.",
        },
      ],
    },
  ];

  useEffect(() => {
    const outOfTownSection = document.querySelector(".faq-category:last-child");
    const rsvpButtonDesktop = document.querySelector(".nav-actions .black");
    const rsvpButtonMobile = document.querySelector(".mobile-only .rsvp-link");

    if (!outOfTownSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (rsvpButtonDesktop) rsvpButtonDesktop.classList.add("pulse-arrow");
          if (rsvpButtonMobile) rsvpButtonMobile.classList.add("pulse-arrow");
        } else {
          if (rsvpButtonDesktop)
            rsvpButtonDesktop.classList.remove("pulse-arrow");
          if (rsvpButtonMobile)
            rsvpButtonMobile.classList.remove("pulse-arrow");
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(outOfTownSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="faq-page">
      <section
        className="faq-hero"
        style={{ backgroundImage: `url(${faqBg})` }}
      >
        <div className="faq-overlay">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      </section>

      <section className="faq-content">
        {faqData.map((category, index) => (
          <div
            key={index}
            className="faq-category"
            id={category.category.toLowerCase().replace(/\s+/g, "-")}
          >
            <h2 className="category-title">{category.category}</h2>
            <div className="questions-list">
              {category.questions.map((item, qIndex) => (
                <div key={qIndex} className="faq-item">
                  <h3 className="question">{item.question}</h3>
                  {category.category === "GIFTS" ? (
                    <div className="answer gifts-answer">
                      <p>
                        Your presence is the greatest gift. However, if you wish
                        to bless us, we will appreciate monetary gifts.
                      </p>
                      <div className="account-details">
                        <div className="account-card">
                          <p className="account-number">8082559888</p>
                          <p className="bank-name">Opay</p>
                          <p className="account-name">Hezekiah Ogbeide</p>
                        </div>
                        <div className="account-card">
                          <p className="account-number">2117618015</p>
                          <p className="bank-name">Zenith Bank</p>
                          <p className="account-name">Hezekiah Ogbeide</p>
                        </div>
                      </div>
                    </div>
                  ) : category.category === "OUT-OF-TOWN GUESTS" ? (
                    <p className="answer">
                      If you are traveling in, we recommend contacting the{" "}
                      <a
                        href="https://wa.me/qr/RBYDO7NRPCDQE1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rsvp-link-text"
                      >
                        RSVP
                      </a>{" "}
                      for accommodation booking and support.
                    </p>
                  ) : (
                    <p className="answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
