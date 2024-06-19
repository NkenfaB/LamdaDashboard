import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { authData: null },
  reducers: {
    AUTH: (state, action) => {
      state.authData = action.payload;
    },
    LOGOUT: (state) => {
      state.authData = null;
      localStorage.removeItem("profile");
    },
  },
});

export const { AUTH, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
