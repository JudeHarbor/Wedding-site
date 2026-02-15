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
              <NavLink to="/travel">TRAVEL & STAY</NavLink>
            </li>
            <li>
              <NavLink to="/info">INFO</NavLink>
            </li>
            <li className="mobile-only">
              <a href="#">FAQS</a>
            </li>
            <li className="mobile-only">
              <a href="#" className="rsvp-link">
                RSVP
              </a>
            </li>
          </ul>

          <Link to="/" className="logo">
            SONIA & HEZEKIAH
          </Link>

          <div className="nav-actions">
            <button className="white">FAQS</button>
            <button className="black">RSVP</button>
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
