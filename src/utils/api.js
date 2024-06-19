import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  console.log("Request Interceptor called");
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log("User Data Before", user);
  if (user && user.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
    console.log("Token set in request headers:", req.headers.Authorization);
  } else {
    console.error("User or token not found in localStorage");
  }
  return req;
});

// Auth API
export const login = (formData) => API.post("/auth/login", formData);
export const register = (formData) => API.post("/auth/register", formData);

// Event API
export const createEvent = (formData) => API.post("/events", formData);
export const fetchEvents = () => API.get("/events");
export const fetchEventsByUserId = (userId) =>
  API.get(`/events/user?userId=${userId}`);
export const updateEvent = (id, eventData) =>
  API.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => API.delete(`/events/${id}`);
export const registerEvent = (userId, eventId) =>
  API.post(`/events/${userId}/register`, eventId);
//------------------------------------------------

export const fetchRegisteredEvents = (userId) =>
  API.get(`/events/registered/${userId}`);

//------------------------------------------------ axios.post(`/api/events/${eventId}/register`, { userId },

export const joinRoom = (roomId) => API.post(`/video-call/${roomId}`);

export default API;
