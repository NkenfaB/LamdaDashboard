import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/authActions";
import Logo from "./../../resources/Logo.png";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className={style.navWrapper}>
        <div className={style.navPosition}>
          <button
            className={style.toggleButton}
            type="button"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="text-white w-6 h-8" />
          </button>
          <div
            className={`${style.headlinesWrapper} ${
              menuOpen ? style.menuOpen : ""
            }`}
          >
            <NavLink className={style.logoWrapper} to="/home">
              <img className={style.logoStyle} src={Logo} alt="Logo" />
            </NavLink>
            <ul className={style.navMenu1}>
              <li className={style.navSubMenu1}>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-white hover:text-blue-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={style.navSubMenu1}>
                <NavLink
                  to="/my-event"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-white hover:text-blue-500"
                  }
                >
                  Event
                </NavLink>
              </li>
              <li className={style.navSubMenu1}>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-white hover:text-blue-500"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className={style.navSubMenu1}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-white hover:text-blue-500"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={style.navSubMenuWrapper}>
            {/* <NavLink className={style.navSubMenu2} to="/notifications">
              <FontAwesomeIcon icon={faBell} className={style.navSubMenuIcon} />
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-white hover:text-blue-500"
              }
              to="/profile"
            >
              <FontAwesomeIcon icon={faUser} className={style.navSubMenuIcon} />
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-white hover:text-yellow-500"
              }
            >
              <FontAwesomeIcon
                onClick={handleLogout}
                icon={faSignOutAlt}
                className={style.navSubMenuIcon}
              />
            </NavLink>
            {userInfo ? (
              <div className={style.usernameWrap}>
                <span>{userInfo.username}</span>
              </div>
            ) : (
              <div className={style.navSubTitle}>
                <NavLink className={style.navSubTitleFont} to="/login">
                  Login
                </NavLink>
                <NavLink className={style.navSubTitleFont} to="/signup">
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
