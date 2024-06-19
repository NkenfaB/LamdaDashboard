import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Banner.module.css";
import Banner from "../../resources/Banner.jpg";

function BannerComponent() {
  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.indicatorConatiner}`}>
        <button type="button" className={`${style.indicators1}`}></button>
        <button type="button" className={`${style.indicators2}`}></button>
      </div>

      <div className={`${style.CarouselContainer}`}>
        <div className={`${style.imageWrapper}`}>
          <img src={Banner} className={`${style.imageStyle}`} alt="Banner" />
        </div>
        <div className={`${style.titleContainer}`}>
          <h5 className={`${style.bannerTitle}`}>T-Shirt / Tops</h5>
          <p className={`${style.bannerText1}`}>Summer Value Pack</p>
          <p className={`${style.bannerText2}`}>cool / colorful / comfy</p>
          <div className={`${style.bannerButton}`}>
            <button className={`${style.buttonStyle}`}>Shop Now</button>
          </div>
        </div>
      </div>

      <button className={`${style.previousButton}`} type="button">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-[#ffffff] w-6 h-11"
        />
      </button>

      <button className={`${style.nextButton}`} type="button">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[#ffffff] w-6 h-11"
        />
      </button>
    </div>
  );
}

export default BannerComponent;
