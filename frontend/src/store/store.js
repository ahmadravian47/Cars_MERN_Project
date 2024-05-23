import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, activeUser: JSON.parse(localStorage.getItem('activeUser')) || null},
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.activeUser = action.payload;
      localStorage.setItem('activeUser',JSON.stringify(state.activeUser));
    },
    logout(state) {
      state.isLoggedIn = false;
      state.activeUser = null;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
