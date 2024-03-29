import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "",
    roles: [],
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, login, logout } = authSlice.actions;

export default authSlice.reducer;
