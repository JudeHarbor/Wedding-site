import { useState, useEffect } from "react";
import "./FloatingTimer.css";

const FloatingTimer = () => {
  const targetDate = new Date("2026-03-21T11:00:00+01:00").getTime();
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    // Hide when main countdown section is in view
    const handleScroll = () => {
      const countdownSection = document.getElementById("main-countdown");
      if (countdownSection) {
        const rect = countdownSection.getBoundingClientRect();
        // Hide if more than 10% of the section is visible
        const isNowVisible = rect.top >= window.innerHeight || rect.bottom <= 0;
        setIsVisible(isNowVisible);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetDate]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className={`floating-timer ${!isVisible ? "hidden" : ""}`}>
      <div className="unit">
        <span>{formatNumber(timeLeft.days)}</span>
        <small>D</small>
      </div>
      <div className="unit">
        <span>{formatNumber(timeLeft.hours)}</span>
        <small>H</small>
      </div>
      <div className="unit">
        <span>{formatNumber(timeLeft.minutes)}</span>
        <small>M</small>
      </div>
      <div className="unit">
        <span>{formatNumber(timeLeft.seconds)}</span>
        <small>S</small>
      </div>
    </div>
  );
};

export default FloatingTimer;
