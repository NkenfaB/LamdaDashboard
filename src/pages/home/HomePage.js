import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchEvents, registerEvent } from "../../actions/eventActions";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import EventGrid from "../../components/Card/EventGrid";
import Footer3 from "../../components/Footer/Footer3";

import style from "./Home.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  const eventList = useSelector((state) => state.eventList);
  const { loading, error, events } = eventList;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(fetchEvents());
    }
  }, [dispatch, navigate, userInfo]);

  const handleRegister = (eventId) => {
    if (userInfo) {
      dispatch(registerEvent(eventId, userInfo._id))
        .then(() => {
          dispatch(fetchEvents());
        })
        .catch((error) => {
          console.error("Error Registering Event: ", error);
        });
    }
  };

  return (
    <div className={`${style.EventWrapper}`}>
      <NavBar />
      <SearchBar />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <EventGrid events={events} onRegister={handleRegister} />
      )}
      <Footer3 />
    </div>
  );
};

export default HomePage;
