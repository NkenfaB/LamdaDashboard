import React from "react";
import Card from "./Card";
import style from "./Card.module.css";

const EventGrid = ({ events, onRegister }) => {
  console.log("Events in EventGrid:", events);

  // Guard against events being undefined or null
  if (!events) {
    return <div>No events available</div>;
  }

  return (
    <div className={style.cardsContainer}>
      {events.map((event) => (
        <Card
          key={event._id} // Note: Index as key is not ideal if events can be reordered or filtered
          event={event}
          onRegister={onRegister}
        />
      ))}
    </div>
  );
};

export default EventGrid;
