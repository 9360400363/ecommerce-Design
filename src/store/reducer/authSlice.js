import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("userToken") || "",
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || {},
  },
  reducers: {
    setToken: (state, { payload }) => {
      localStorage.setItem("userToken", payload.token);
      state.token = payload.token;
    },
    setUserDetails: (state, { payload }) => {
      localStorage.setItem("userDetails", JSON.stringify(payload.userDetails));
      state.userDetails = payload.userDetails;
    },
    logout: (state) => {
      localStorage.clear();
      state.token = "";
      state.userDetails = {};
    },
  },
});

export const { setToken, setUserDetails, logout } = authSlice.actions;

export default authSlice.reducer;
