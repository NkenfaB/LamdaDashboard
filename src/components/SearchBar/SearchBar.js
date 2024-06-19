import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import style from "./Search.module.css";

const SearchBar = () => {
  return (
    <div>
      <div className={`${style.searchWrapper}`}>
        <input
          type="text"
          placeholder="Search Events..."
          className={`${style.searchInput}`}
        />
        <button className={`${style.searchButton}`}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* <button className={`${style.someButton}`}>Some Button</button> */}
      </div>

      <div className={`${style.filterWrapper}`}>
        <div className={`${style.filterItem}`}>
          <select id="filter1" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Date Posted
            </option>
            <option value="option1">Last 24 hours</option>
            {/* <option value="option2">Last 3 days</option>
            <option value="option2">Last 7 days</option> */}
            <option value="option2">Last Visit</option>
          </select>
        </div>
        {/* <div className={`${style.filterItem}`}>
          <select id="filter2" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Event Type
            </option>
            <option value="conference">Conference</option>
            <option value="webinar">Webinar</option>
            <option value="workshop">Workshop</option>
            <option value="meetup">Meetup</option>
          </select>
        </div> */}
        <div className={`${style.filterItem}`}>
          <select id="filter3" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Location
            </option>
            <option value="option1">Virtual</option>
            {/* <option value="option2">In-Person</option>
            <option value="hybrid">Hybrid</option> */}
          </select>
        </div>
        {/* <div className={`${style.filterItem}`}>
          <select id="filter4" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Audience
            </option>
            <option value="general">General</option>
            <option value="professionals">Professionals</option>
            <option value="students">Students</option>
            <option value="executives">Executives</option>
          </select>
        </div> */}
        {/* <div className={`${style.filterItem}`}>
          <select id="filter5" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
          </select>
        </div> */}
        {/* <div className={`${style.filterItem}`}>
          <select id="filter6" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Price Range
            </option>
            <option value="free">Free</option>
            <option value="under50">Under FCFA 5000</option>
            <option value="50to100">FCFA 5000 to FCFA 10000</option>
          </select>
        </div> */}
        <div className={`${style.filterItem}`}>
          <select id="filter6" className={`${style.filterSelect}`}>
            <option value="" disabled selected hidden>
              Status
            </option>
            <option value="upcoming">Upcoming</option>
            {/* <option value="ongoing">Ongoing</option> */}
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <div className={`${style.bottomBorder}`}></div>
    </div>
  );
};

export default SearchBar;
