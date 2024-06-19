// import React from "react";
// import style from "./CustomEventCard.module.css";
// import { useNavigate } from "react-router-dom";

// const CustomEventCard = ({ event, onCancelRegistration }) => {
//   const navigate = useNavigate();

//   const handeJointEvent = () => {
//     navigate("/JoinEvent");
//   };

//   return (
//     <div className={style.eventCard}>
//       <h3>{event.title}</h3>
//       <p>{event.description}</p>
//       <p>Countdown Timer: {event.countdown}</p>
//       <button onClick={() => onCancelRegistration(event.id)}>
//         Cancel Registration
//       </button>
//       <button onClick={handeJointEvent}>Join Event</button>
//     </div>
//   );
// };

// export default CustomEventCard;

// // <Link to={`/join/${event.id}`}></Link>

import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./CustomEventCard.module.css";

const CustomEventCard = ({ event, onCancelRegistration }) => {
  const navigate = useNavigate();

  const handleJoinEvent = () => {
    navigate(`/joinEvent/${event.id}`);
  };

  return (
    <div className={style.eventCard}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Countdown Timer: {event.countdown}</p>
      <button onClick={() => onCancelRegistration(event.id)}>
        Cancel Registration
      </button>
      <button onClick={handleJoinEvent}>Join Event</button>
    </div>
  );
};

export default CustomEventCard;
