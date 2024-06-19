import axios from "axios";

import {
  createEvent as createEventAPI,
  fetchEvents as fetchEventsAPI,
  fetchEventsByUserId as fetchEventsByUserIdAPI,
  getEventDetails as getEventDetailsAPI,
  updateEvent as updateEventAPI,
  deleteEvent as deleteEventAPI,
  registerEvent as registerEventAPI,
  fetchRegisteredEvents as fetchRegisteredEventsByUserIdAPI,
} from "./../utils/api";
import {
  EVENT_CREATE_REQUEST,
  EVENT_CREATE_SUCCESS,
  EVENT_CREATE_FAIL,
  EVENT_LIST_REQUEST,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_DELETE_REQUEST,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAIL,
  EVENT_REGISTER_SUCCESS,
  EVENT_REGISTER_FAIL,
  FETCH_REGISTERED_EVENTS_SUCCESS,
  FETCH_REGISTERED_EVENTS_FAIL,
  REGISTERED_EVENT_LIST_REQUEST,
  REGISTERED_EVENT_LIST_SUCCESS,
  REGISTERED_EVENT_LIST_FAIL,
  // ACTIVITY_HISTORY_REQUEST,
  // ACTIVITY_HISTORY_SUCCESS,
  // ACTIVITY_HISTORY_FAIL,
} from "../constants/eventConstants";

const getConfig = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
};

//--------------------Fetch Event-------------------------------------------

export const createEvent = (formData) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_CREATE_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userInfo")).token
        }`,
      },
    };
    const { data } = await createEventAPI(formData, config);

    dispatch({ type: EVENT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchEvents = () => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });

    const config = getConfig();
    const { data } = await fetchEventsAPI(config);
    console.log("fetched events data:", data);

    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchEventsByUserId = (userId) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_LIST_REQUEST });

    const config = getConfig();
    const { data } = await fetchEventsByUserIdAPI(userId, config);
    console.log("fetched events data:", data);

    dispatch({ type: EVENT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateEvent = (eventId, formData) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_UPDATE_REQUEST });

    const config = getConfig();
    const { data } = await updateEventAPI(eventId, formData, config);

    dispatch({ type: EVENT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: EVENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_DELETE_REQUEST });

    const config = getConfig();
    await deleteEventAPI(id, config);

    dispatch({ type: EVENT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: EVENT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerEvent = (userId, eventId) => async (dispatch) => {
  try {
    const config = getConfig();

    console.log(
      `Sending registration request for event ${eventId} with user ${userId}`
    );

    await registerEventAPI(userId, eventId, config);

    dispatch({ type: EVENT_REGISTER_SUCCESS });
    dispatch(fetchRegisteredEventsByUserId(userId));
  } catch (error) {
    dispatch({
      type: EVENT_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
//-----------------------------------------------------------------------------------------------
// export const fetchRegisteredEventsByUserId = (userId) => async (dispatch) => {
//   try {
//     dispatch({ type: REGISTERED_EVENT_LIST_REQUEST });

//     const config = getConfig();
//     console.log("Fetching registered events for user ID:", userId); // Debug line

//     const { data } = await fetchRegisteredEventsByUserIdAPI(userId, config);
//     dispatch({ type: REGISTERED_EVENT_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: REGISTERED_EVENT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
export const fetchRegisteredEventsByUserId = (userId) => async (dispatch) => {
  try {
    dispatch({ type: REGISTERED_EVENT_LIST_REQUEST });

    const config = getConfig();
    const { data } = await fetchRegisteredEventsByUserIdAPI(userId, config);

    console.log("Fetchededed registered events data:", data); // Add this log to see the API response

    dispatch({
      type: REGISTERED_EVENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTERED_EVENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//------------------------------------------------------------------------------
// export const fetchRegisteredEvents = (userId) => async (dispatch, getState) => {
//   try {
//     const config = getConfig();
//     console.log("Fetching registered events for user ID:", userId); // Debug line

//     await fetchRegisteredEventsByUserIdAPI(userId, config);

//     dispatch({ type: REGISTERED_EVENT_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: REGISTERED_EVENT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

// export const fetchActivityHistory = () => async (dispatch, getState) => {
//   try {
//     dispatch({ type: ACTIVITY_HISTORY_REQUEST });

//     const {
//       userLogin: { userInfo },
//     } = getState();
//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get("/api/events/activity", config);

//     dispatch({ type: ACTIVITY_HISTORY_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: ACTIVITY_HISTORY_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
