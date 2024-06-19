import React from "react";
import style from "./CardBanner";
import CardBanner from "./CardBanner";

import land_page from "./../../resources/LP.jpg";
import land_page2 from "./../../resources/LP2.jpg";
import land_page3 from "./../../resources/LP2.jpg";

//import banner from "./assets/local-image.jpg";

const events = [
  {
    id: 1,
    title: "Explore Virtual Events with Xylo",
    description:
      "Join us for an exciting virtual conference on the latest in tech.",
    images: [land_page, land_page2, land_page3],
    likes: 120,
    views: 300,
  },
];

const LandingPageBanner = () => {
  return (
    <div className={style.cardsContainer}>
      {events.map((event, index) => (
        <CardBanner key={index} event={event} />
      ))}
    </div>
  );
};

export default LandingPageBanner;
