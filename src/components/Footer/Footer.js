import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";
import Logo from "./../../resources/Logo.png";

const Footer = () => {
  return (
    <div>
      <div className={`${style.wrapper}`}>
        <div className={`${style.wrapperBorder}`}>
          <div className={`${style.borderTitle}`}>
            <span>Get connected with us:</span>
          </div>
          <div className={`${style.wrapperIcons}`}>
            <a className={`${style.iconsLinks}`}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={`${style.iconsFont}`}
              />
            </a>
            <a className={`${style.iconsLinks}`}>
              <FontAwesomeIcon icon={faX} className={`${style.iconsFont}`} />
            </a>
            <a className={`${style.iconsLinks}`}>
              <FontAwesomeIcon
                icon={faYoutube}
                className={`${style.iconsFont}`}
              />
            </a>
            <a className={`${style.iconsLinks}`}>
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${style.iconsFont}`}
              />
            </a>
            <a className={`${style.iconsLinks}`}>
              <FontAwesomeIcon
                icon={faGithub}
                className={`${style.iconsFont}`}
              />
            </a>
          </div>
        </div>

        <div className={`${style.subFooterWrapper}`}>
          <div cclassName={`${style.subFooter}`}>
            <h5 className={`${style.subFooterTitle}`}>
              Discover Virtual Events
            </h5>

            <p className={`${style.subFooterText}`}>
              Join us in a world of virtual experiences. Connect, engage, and
              explore our diverse range of events from the comfort of your home!
            </p>
          </div>

          <div className={`${style.listWrapper}`}>
            <div className={`${style.subListWrapper}`}>
              <h5 className={`${style.listTitle}`}>Events</h5>

              <ul className={`${style.listElements}`}>
                <li>
                  <a className={`${style.listItems}`}>Webinars</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Workshops</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Conferences</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Networking</a>
                </li>
              </ul>
            </div>

            <div className={`${style.subListWrapper}`}>
              <h5 className={`${style.listTitle}`}>Participate</h5>

              <ul className={`${style.listElements}`}>
                <li>
                  <a className={`${style.listItems}`}>Register Now</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Upcoming Events</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Get Involved</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>FAQs</a>
                </li>
              </ul>
            </div>

            <div className={`${style.subListWrapper}`}>
              <h5 className={`${style.listTitle}`}>Connect</h5>

              <ul className={`${style.listElements}`}>
                <li>
                  <a className={`${style.listItems}`}>Join Our Community</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Event Calendar</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Support</a>
                </li>
                <li>
                  <a className={`${style.listItems}`}>Blog</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${style.newsLetterWrap}`}>
            <form action="">
              <div className={`${style.newsLetter}`}>
                <div className={`${style.newsLetterFont}`}>
                  <p className={`${style.newsLetterStyle}`}>
                    Sign up for our newsletter
                  </p>
                </div>

                <div>
                  <label for="inputSignUp" className={`${style.labelFont}`}>
                    Small input
                  </label>
                  <input
                    type="email"
                    id="inputSignUp"
                    placeholder="Your address"
                    className={`${style.inputFont}`}
                  />
                </div>

                <div className={`${style.buttonWrap}`}>
                  <button type="submit" className={`${style.buttonFont}`}>
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={`${style.copyRightWrap}`}>
          <span>© 2024 Copyright: </span>

          <a className={`${style.LogoWrap}`} href="#">
            <img
              src={Logo}
              className={`${style.image}`}
              alt="TE Logo"
              loading="lazy"
            />
          </a>

          <a className={`${style.copyRightFont}`} href="#">
            Xylo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
