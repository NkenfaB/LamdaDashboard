import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
} from "../reducers/userReducers";
import {
  eventListReducer,
  eventCreateReducer,
  eventUpdateReducer,
  eventDeleteReducer,
  registeredEventsReducer,
  registeredEventListReducer,
} from "../reducers/eventReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  eventList: eventListReducer,
  eventCreate: eventCreateReducer,
  eventUpdate: eventUpdateReducer,
  eventDelete: eventDeleteReducer,
  registeredEvents: registeredEventsReducer,
  registeredEventsList: registeredEventListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
