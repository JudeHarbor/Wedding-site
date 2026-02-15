import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import FAQ from "./pages/FAQ";
import "./App.css";

function App() {
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    // 1. Scroll Reveal Logic
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const observe = () => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
    };

    // Initial observe
    observe();

    // Re-observe when DOM content changes (to handle React routing)
    const mutationObserver = new MutationObserver(observe);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // 2. Global Image Click Listener for Lightbox
    const handleImageClick = (e) => {
      if (
        e.target.tagName === "IMG" &&
        !e.target.closest(".menu-toggle") &&
        !e.target.closest(".logo")
      ) {
        setLightboxImg(e.target.src);
      }
    };

    document.addEventListener("click", handleImageClick);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("click", handleImageClick);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/travel"
              element={
                <div
                  style={{
                    padding: "150px 20px",
                    textAlign: "center",
                    minHeight: "60vh",
                  }}
                >
                  <h2 style={{ fontFamily: "silk reg", fontSize: "2rem" }}>
                    TRAVEL & STAY
                  </h2>
                  <p style={{ marginTop: "2rem", opacity: 0.7 }}>
                    Information for our traveling guests will be updated soon.
                  </p>
                </div>
              }
            />
            <Route
              path="/info"
              element={
                <div
                  style={{
                    padding: "150px 20px",
                    textAlign: "center",
                    minHeight: "60vh",
                  }}
                >
                  <h2 style={{ fontFamily: "silk reg", fontSize: "2rem" }}>
                    WEDDING INFO
                  </h2>
                  <p style={{ marginTop: "2rem", opacity: 0.7 }}>
                    More details about the logistics and itinerary are coming
                    soon.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />

        {/* Global Lightbox */}
        {lightboxImg && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightboxImg(null)}
          >
            <div className="lightbox-content">
              <button className="lightbox-close">&times;</button>
              <img
                src={lightboxImg}
                alt="Full screen preview"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
