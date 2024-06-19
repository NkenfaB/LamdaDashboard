// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faEye, faShareAlt } from "@fortawesome/free-solid-svg-icons";
// import style from "./Card.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import MyEvents from "../../pages/events/myEvent";

// const Card = ({ event, onRegister }) => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const navigate = useNavigate();

//   if (!event) {
//     return null;
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const handleRegisterClick = () => {
//     // Show success prompt
//     setShowSuccess(true);
//     // Call onRegister callback to handle registration logic
//     if (onRegister) {
//       onRegister(event);
//     }
//     // Hide success prompt after a few seconds
//     setTimeout(() => {
//       setShowSuccess(false);
//       navigate("/MyEvents");
//     }, 3000);
//   };

//   return (
//     <div className={`${style.cardWrapper}`}>
//       <div className={`${style.card}`}>
//         <div className={`${style.imageWrapper}`}>
//           <Slider {...settings}>
//             {event.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={event.title}
//                 className={style.image}
//               />
//             ))}
//           </Slider>
//           <div className={style.title}>{event.title}</div>
//         </div>
//         <div className={style.description}>{event.description}</div>
//         <div className={style.stats}>
//           <div className={style.statItem}>
//             <FontAwesomeIcon icon={faHeart} className={style.icon} />
//             {event.likes}
//           </div>
//           <div className={style.statItem}>
//             <FontAwesomeIcon icon={faEye} className={style.icon} />
//             {event.views}
//           </div>
//           <div className={style.statItem}>
//             <FontAwesomeIcon icon={faShareAlt} className={style.icon} />
//           </div>
//         </div>
//         <button className={style.registerButton} onClick={handleRegisterClick}>
//           Register
//         </button>{" "}
//         {showSuccess && (
//           <div className={style.successPrompt}>Registered successfully!</div>
//         )}
//       </div>
//       <hr className={style.horizontalLine} />
//       <div className={style.pageFormatting}>
//         {/* Add additional formatting or content here */}
//         <p className={style.formattingText}>
//           Additional content or formatting goes here.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import style from "./CardBanner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardBanner = ({ event, onRegister }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  if (!event) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleRegisterClick = () => {
    setShowSuccess(true);
    if (onRegister) {
      onRegister(event);
    }
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/myEvents");
    }, 3000);
  };

  return (
    <div className={style.cardWrapper}>
      <div className={style.card}>
        <div className={style.imageWrapper}>
          <Slider {...settings}>
            {event.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={event.title}
                className={style.image}
              />
            ))}
          </Slider>
          <div className={style.title}>{event.title}</div>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
