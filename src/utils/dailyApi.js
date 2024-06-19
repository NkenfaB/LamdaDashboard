import axios from "axios";

const API_KEY = process.env.REACT_APP_DAILY_API_KEY;

const DAILY_API_ENDPOINT = "https://api.daily.co/v1/meeting-tokens";

export const createDailyRoom = async (roomName) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await axios.post(
      DAILY_API_ENDPOINT,
      { properties: { room_name: roomName } },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating Daily room:", error);
    throw error;
  }
};
