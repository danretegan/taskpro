import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  getDailyRate,
  updateUserWithDailyRate,
} from "./operations";

const initialState = {
  isLoading: false,
  error: null,
  user: {
    name: null,
    email: null,
    dailyCalorieIntake: null,
  },
  token: null,
  isLoggedIn: false,
};

const utils = {
  handlePending: (state) => {
    state.isLoading = true;
  },

  handleRejected: (state, action) => {
    state.isLoading = false;
    state.error =
      action.payload?.response?.data?.message || "Internal server error";
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder

      // *Register
      .addCase(register.pending, utils.handlePending)
      .addCase(register.rejected, utils.handleRejected)
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })

      // *Login
      .addCase(login.pending, utils.handlePending)
      .addCase(login.rejected, utils.handleRejected)
      .addCase(login.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.data.user.name,
          email: action.payload.data.user.email,
          dailyCalorieIntake: action.payload.data.user.dailyCalorieIntake,
        };

        state.token = action.payload.data.token;
        state.isLoggedIn = true;

        state.isLoading = false;
        state.error = null;
      })

      // *Logout
      .addCase(logout.pending, utils.handlePending)
      .addCase(logout.rejected, utils.handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          dailyCalorieIntake: null,
        };

        state.token = null;
        state.isLoggedIn = false;

        state.isLoading = false;
        state.error = null;
      })

      // *Refresh User
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.data.user.name,
          email: action.payload.data.user.email,
          dailyCalorieIntake: action.payload.data.user.dailyCalorieIntake,
        };

        state.isLoggedIn = true;
        state.error = null;
      })

      // *Calc daily rate
      .addCase(getDailyRate.pending, utils.handlePending)
      .addCase(getDailyRate.rejected, utils.handleRejected)
      .addCase(getDailyRate.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })

      // *Update user with daily rate
      .addCase(updateUserWithDailyRate.rejected, utils.handleRejected)
      .addCase(updateUserWithDailyRate.fulfilled, (state, action) => {
        state.user.dailyCalorieIntake = action.payload.data.dailyCalorieIntake;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
