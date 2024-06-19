// src/components/JoinEventCard.js

import React from "react";
import roomLinks from "./roomLinks";

const JoinEventCard = ({ event }) => {
  const { _id, title, description, date, speaker, audience } = event;

  const handleJoinEvent = () => {
    // Determine the room link based on the event's reference
    let roomLink;
    if (audience === "reference1") {
      roomLink = roomLinks.reference1;
    } else if (audience === "reference2") {
      roomLink = roomLinks.reference2;
    } else if (audience === "reference3") {
      roomLink = roomLinks.reference3;
    } else {
      console.error("Invalid event reference");
      return;
    }

    // Open the room link in a new tab
    window.open(roomLink, "_blank");
  };

  const handleCancelEvent = () => {
    // Logic to cancel the event
    console.log(`Cancelled event: ${title}`);
  };

  return (
    <div className="bg-[#CAF9FF] shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-600 mb-2">
        Date: {new Date(date).toLocaleDateString()} | Speaker: {speaker}
      </p>
      <div className="flex justify-end">
        <button
          onClick={handleJoinEvent}
          className="bg-[#00CEE9] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Join Event
        </button>
        {/* <button
          onClick={handleCancelEvent}
          className="bg-[#F08F94] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button> */}
      </div>
    </div>
  );
};

export default JoinEventCard;

// why even still complicated, we can just add nested if statement to check for the reference in the JoinEventCard. like here i in the const with event links, you just need to check the reference of the event and chose the link for it. and make sure every other user registered to that event join the same link.

// const roomLinks = {
// reference1: "https://your-daily-room1-link.daily.co/room1",
// reference2: "https://your-daily-room2-link.daily.co/room2",
// reference3: "https://your-daily-room3-link.daily.co/room3",
// };

// module.exports = roomLinks;
