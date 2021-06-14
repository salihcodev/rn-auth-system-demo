// >>>> import pkgs:
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// >>>> utils:
import { authLoginHandler, authSignupHandler } from "./auth-logging.events";
import logger from "../../../utils/logger";
import {
  setLocalDataAsObj,
  removeLocalData,
} from "../../../utils/device-storage-controllers/localStorage.controllers";

const stateStage = { SATISFIED: `SATISFIED`, BUSY: `BUSY`, FAILED: `FAILED` };

// initial state
const INITIAL_STATE = {
  user: null,
  stage: stateStage.SATISFIED, // busy | satisfied | failed
};

// make a logger instance:
const log = logger("STAGE NOW::");

// auth slice:
export const authLoggingSlice = createSlice({
  name: "loggingUSerSlice",
  initialState: INITIAL_STATE,
  reducers: {
    logoutUser: () => {
      removeLocalData("currentAuthedUser");
    },
  },

  extraReducers: {
    // ::LOGIN HANDLERS::
    [authLoginHandler.pending]: (state) => {
      state.stage = stateStage.BUSY;

      // logs:
      log("#### PENDING ####");
    },
    [authLoginHandler.fulfilled]: (state, event) => {
      state.user = event.payload;

      // save user data in local:
      setLocalDataAsObj(`currentAuthedUser`, event.payload);
      state.stage = stateStage.SATISFIED;

      // logs:
      log("#### FULFILLED ####");
      log(state);
    },
    [authLoginHandler.rejected]: (state) => {
      state.stage = stateStage.FAILED;

      // logs:
      log("#### REJECTED ####");
    },

    // ::SIGNUP HANDLERS::
    [authSignupHandler.pending]: (state) => {
      state.stage = stateStage.BUSY;

      // logs:
      log("#### PENDING ####");
    },
    [authSignupHandler.fulfilled]: (state, event) => {
      state.user = event.payload;

      // save user data in local:
      setLocalDataAsObj(`currentAuthedUser`, event.payload);
      state.stage = stateStage.SATISFIED;

      // logs:
      log("#### FULFILLED ####");
      log(state);
    },
    [authSignupHandler.rejected]: (state, event) => {
      state.stage = stateStage.FAILED;

      // logs:
      log("#### REJECTED ####");
    },
  },
});

// spill out the events to make the functionality:
export const { logoutUser } = authLoggingSlice.actions;

// export the reducer to make use of it later:
export default authLoggingSlice.reducer;
