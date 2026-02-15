import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
  };

  const closeMenu = () => {
    setIsNavActive(false);
  };

  useEffect(() => {
    if (isNavActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavActive]);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <>
      <header>
        <nav className={isNavActive ? "nav-active" : ""}>
          <button className="menu-toggle" id="menuToggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-links">
            <li>
              <NavLink to="/ourstory">OUR STORY</NavLink>
            </li>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="mobile-only">
              <NavLink to="/faq">FAQS</NavLink>
            </li>
            <li className="mobile-only">
              <a
                href="https://wa.me/qr/RBYDO7NRPCDQE1"
                target="_blank"
                rel="noopener noreferrer"
                className="rsvp-link"
              >
                RSVP
              </a>
            </li>
          </ul>

          <Link to="/" className="logo">
            SONIA & HEZEKIAH
          </Link>

          <div className="nav-actions">
            <NavLink to="/faq">
              <button className="white">FAQS</button>
            </NavLink>
            <a
              href="https://wa.me/qr/RBYDO7NRPCDQE1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="black">RSVP</button>
            </a>
          </div>
        </nav>
      </header>
      <div
        className={`menu-overlay ${isNavActive ? "active" : ""}`}
        id="menuOverlay"
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;
