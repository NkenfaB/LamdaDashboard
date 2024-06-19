import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faShareAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Card.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ event, onRegister }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isRegistered, setIsRegistered] = useState(event.isRegistered || false);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (event && event.date) {
      const eventDate = new Date(event.date).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      const interval = setInterval(() => {
        const updatedDifference = eventDate - new Date().getTime();
        setTimeLeft(updatedDifference);
        if (updatedDifference < 0) {
          clearInterval(interval);
          setTimeLeft(null);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [event]);

  // const formatTimeLeft = () => {
  //   if (timeLeft === null) return "Event has ended";

  //   const seconds = Math.floor((timeLeft / 1000) % 60);
  //   const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  //   const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  //   return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  // };

  if (!event) {
    return null;
  }

  const handleRegisterClick = () => {
    setShowSuccess(true);
    if (onRegister) {
      onRegister(event._id);
      setIsRegistered(true);
    }
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <img
            src={
              event.image
                ? `http://localhost:5000${event.image}`
                : "https://www.bing.com/th?id=OIP.cjI6TRCMfyRiefRsTOnCkwHaE8&w=176&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            }
            alt={event.title}
            className={style.image}
          />
          <div className={style.title}>{event.title}</div>
        </div>
        <div className={style.description}>{event.description}</div>
        <div className={style.details}>
          <div className={style.detail}>
            <FontAwesomeIcon icon={faClock} className={style.icon} />
            {event.date && (
              <span className={style.detailText}>
                {new Date(event.date).toLocaleString()}
              </span>
            )}
          </div>
          <div className={style.detail}>
            {/* <FontAwesomeIcon icon={faShareAlt} className={style.icon} /> */}
            <span className={style.detailText}>Speaker: {event.speaker}</span>
          </div>
        </div>
        {/* <div className={style.stats}>
          <div className={style.statItem}>
            <FontAwesomeIcon icon={faHeart} className={style.icon} />
            {event.likes}
          </div>
          <div className={style.statItem}>
            <FontAwesomeIcon icon={faEye} className={style.icon} />
            {event.views}
          </div>
        </div> */}
        <button
          className={style.registerButton}
          onClick={handleRegisterClick}
          disabled={isRegistered}
        >
          {isRegistered ? "Registered" : "Register"}
        </button>
        {/* {showSuccess && (
          <div className={style.successPrompt}>Registered successfully!</div>
        )} */}
        {timeLeft !== null && (
          <div className={style.timer}>
            {/* <FontAwesomeIcon icon={faClock} className={style.icon} /> */}
            {/* {formatTimeLeft()} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
