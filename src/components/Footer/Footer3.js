import React from "react";

import style from "./Footer3.module.css";
import Logo from "./../../resources/Logo.png";

const Footer3 = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className={`${style.copyRightWrap}`}>
        <span>© 2024 Copyright: </span>
        <a className={`${style.LogoWrap}`} href="#">
          <img
            src={Logo}
            className={`${style.image}`}
            alt="Xyl Logo"
            loading="lazy"
          />
        </a>
        <a className={`${style.copyRightFont}`} href="#">
          Xylo
        </a>
      </div>
    </div>
  );
};

export default Footer3;
