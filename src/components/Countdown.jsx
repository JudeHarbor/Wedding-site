import { useState, useEffect } from "react";
import "./Countdown.css";
import bgImg from "../assets/kiah/kiah16.jpeg";

const Countdown = () => {
  const targetDate = new Date("2026-03-21T11:00:00+01:00").getTime();
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

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section
      id="main-countdown"
      className="countdown reveal"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="overlay">
        <p className="subtitle">LET THE COUNTDOWN BEGIN</p>

        <div className="time">
          <div>
            <span>{formatNumber(timeLeft.days)}</span>
            <small>DAYS</small>
          </div>
          <div>
            <span>{formatNumber(timeLeft.hours)}</span>
            <small>HOURS</small>
          </div>
          <div>
            <span>{formatNumber(timeLeft.minutes)}</span>
            <small>MINUTES</small>
          </div>
          <div>
            <span>{formatNumber(timeLeft.seconds)}</span>
            <small>SECONDS</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
