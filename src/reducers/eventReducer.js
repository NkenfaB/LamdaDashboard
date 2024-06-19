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
  ACTIVITY_HISTORY_REQUEST,
  ACTIVITY_HISTORY_SUCCESS,
  ACTIVITY_HISTORY_FAIL,
} from "../constants/eventConstants";

export const eventCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_CREATE_REQUEST:
      return { loading: true };
    case EVENT_CREATE_SUCCESS:
      return { loading: false, success: true, event: action.payload };
    case EVENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventListReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case EVENT_LIST_REQUEST:
      return { loading: true, events: [] };
    case EVENT_LIST_SUCCESS:
      return { loading: false, events: action.payload };
    case EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventUpdateReducer = (state = { event: {} }, action) => {
  switch (action.type) {
    case EVENT_UPDATE_REQUEST:
      return { loading: true };
    case EVENT_UPDATE_SUCCESS:
      return { loading: false, success: true, event: action.payload };
    case EVENT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EVENT_DELETE_REQUEST:
      return { loading: true };
    case EVENT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EVENT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const registeredEventsReducer = (
  state = { registeredEvents: [] },
  action
) => {
  switch (action.type) {
    case FETCH_REGISTERED_EVENTS_SUCCESS:
      return { registeredEvents: action.payload };
    case FETCH_REGISTERED_EVENTS_FAIL:
      return { error: action.payload };
    case EVENT_REGISTER_SUCCESS:
      return { ...state, success: true };
    case EVENT_REGISTER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const registeredEventListReducer = (
  state = { registeredEventsList: [] },
  action
) => {
  switch (action.type) {
    case REGISTERED_EVENT_LIST_REQUEST:
      return { loading: true, registeredEventsList: [] };
    case REGISTERED_EVENT_LIST_SUCCESS:
      return { loading: false, registeredEventsList: action.payload };
    case REGISTERED_EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const activityHistoryReducer = (
  state = {
    activityHistory: {
      likedEvents: [],
      registeredEvents: [],
      viewedEvents: [],
    },
  },
  action
) => {
  switch (action.type) {
    case ACTIVITY_HISTORY_REQUEST:
      return {
        loading: true,
        activityHistory: {
          likedEvents: [],
          registeredEvents: [],
          viewedEvents: [],
        },
      };
    case ACTIVITY_HISTORY_SUCCESS:
      return { loading: false, activityHistory: action.payload };
    case ACTIVITY_HISTORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
