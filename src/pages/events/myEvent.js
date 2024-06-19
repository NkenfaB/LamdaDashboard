import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createEvent,
  fetchEvents,
  updateEvent,
  deleteEvent,
  registerEvent,
  fetchEventsByUserId,
  fetchRegisteredEventsByUserId,
} from "../../actions/eventActions";

import EventTable from "../../components/EventTable/EventTable";
import NavBar from "../../components/NavBar/NavBar";
import Footer3 from "../../components/Footer/Footer3";
import Card from "../../components/Card/Card";
import JoinEventCard from "../../components/Card/JoinEventCard";

const EventPage = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.eventList);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success: deleteSuccess } = useSelector((state) => state.eventDelete);
  const { registeredEventsList } = useSelector(
    (state) => state.registeredEventsList
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [audience, setAudience] = useState("");
  const [activeTab, setActiveTab] = useState("eventManagement");
  const [eventIdToUpdate, setEventIdToUpdate] = useState(null);

  useEffect(() => {
    if (userInfo) {
      console.log("Fetching events created by user:", userInfo._id);
      dispatch(fetchEventsByUserId(userInfo._id));
      console.log("Fetching events registered by user:", userInfo._id);
      dispatch(fetchRegisteredEventsByUserId(userInfo._id));
    }
  }, [dispatch, userInfo, deleteSuccess]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (userInfo) {
        dispatch(fetchEventsByUserId(userInfo._id));
        dispatch(fetchRegisteredEventsByUserId(userInfo._id));
      }
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [dispatch, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("speaker", speaker);
    formData.append("category", category);
    formData.append("audience", audience);
    if (image) {
      formData.append("image", image);
    }

    formData.append("createdBy", userInfo._id);

    console.log(
      "Event Data Created by the user:",
      Object.fromEntries(formData.entries())
    );

    if (eventIdToUpdate) {
      dispatch(updateEvent(eventIdToUpdate, formData));
    } else {
      dispatch(createEvent(formData));
    }
    clearForm();
  };

  console.log("Events before rendering EventGrid:", events);

  const handleRegisterClick = (event) => {
    dispatch(registerEvent(event._id, userInfo._id));
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setSpeaker("");
    setImage(null);
    setCategory("");
    setAudience("");
    setEventIdToUpdate(null);
  };

  const handleUpdateClick = (event) => {
    setTitle(event.title);
    setDescription(event.description);
    setDate(event.date);
    setSpeaker(event.speaker);
    setCategory(event.category);
    setAudience(event.audience);
    setEventIdToUpdate(event._id);
  };

  // Check if registeredEvents is defined before destructuring
  // const { registeredEvents: userRegisteredEvents } = registeredEvents || {};
  //const userRegisteredEvents = registeredEventsList?.data;

  console.log("------------------------------");

  useEffect(() => {
    console.log("Registered Events fetched Max:", registeredEventsList);
  }, [registeredEventsList]);

  return (
    <div>
      <NavBar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="border-4 border-r-[#001F3F] text-[#001F3F] w-1/4 p-4">
          <h2 className="text-xl font-bold mb-4">Event Dashboard</h2>
          <ul>
            <li
              className={`mb-6 p-2 border-4 border-b-[#001F3F] rounded-lg ${
                activeTab === "eventManagement" && "font-bold hover:text-white"
              }`}
            >
              <button
                onClick={() => setActiveTab("eventManagement")}
                className="w-full text-left"
              >
                Event Management
              </button>
            </li>
            <li
              className={`mb-6 p-2 border-4 border-b-[#001F3F]  rounded-lg ${
                activeTab === "registeredEvents" && "font-bold hover:text-white"
              }`}
            >
              <button
                onClick={() => {
                  setActiveTab("registeredEvents");
                  console.log("Switched to Registered Events tab");
                  console.log(
                    "Current registered events:",
                    registeredEventsList
                  );
                }}
                className="w-full text-left"
              >
                Registered Events
              </button>
            </li>
            {/* <li
              className={`mb-6 p-2 border-4 border-b-[#001F3F]  rounded-lg ${
                activeTab === "activityHistory" && "font-bold hover:text-white"
              }`}
            >
              <button
                onClick={() => setActiveTab("activityHistory")}
                className="w-full text-left"
              >
                Activity History
              </button>
            </li> */}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {activeTab === "eventManagement" && (
            <div>
              <div className="bg-[#ECF0F1]  rounded p-16 border b-[#ccc] mb-10  border-4 border-[#001F3F]-500/75">
                <h1 className="text-2xl font-bold mb-16">Create Event</h1>
                <form
                  onSubmit={submitHandler}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Event Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Event Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Host Name
                    </label>
                    <input
                      type="text"
                      value={speaker}
                      onChange={(e) => setSpeaker(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="meeting">Meeting</option>
                      <option value="conference">Conference</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Audience
                    </label>
                    <select
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="">Select Audience</option>
                      <option value="reference1">For Everyone</option>
                      <option value="reference2">Students</option>
                      <option value="reference3">Workers</option>
                    </select>
                  </div>
                  <div className="mb-4 col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Cover Image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex justify-between ">
                    <button
                      type="submit"
                      className="bg-[#001F3F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      {eventIdToUpdate ? "Update Event" : "Create Event"}
                    </button>
                    <button
                      type="submit"
                      className="bg-[#750101] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={clearForm}
                    >
                      Clear Form
                    </button>
                  </div>
                </form>
              </div>
              <EventTable events={events} onUpdateClick={handleUpdateClick} />
            </div>
          )}
          {activeTab === "registeredEvents" && (
            <div>
              <h1 className="text-2xl font-bold">Registered Events</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {registeredEventsList &&
                  registeredEventsList.map((event) => (
                    <JoinEventCard key={event._id} event={event} />
                  ))}
              </div>
            </div>
          )}
          {activeTab === "activityHistory" && (
            <div>
              <h1 className="text-2xl font-bold">Activity History</h1>
              {/* Content for Activity History */}
            </div>
          )}
        </div>
      </div>
      {/* <Footer3 /> */}
    </div>
  );
};

export default EventPage;
