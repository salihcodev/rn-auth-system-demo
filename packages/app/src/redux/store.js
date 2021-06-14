// >>>> import pkgs:
import { configureStore } from "@reduxjs/toolkit";
// import {combineReducers} from 'redux'

// >>>> import utils:
import authLoggingReducer from "../components/base/auth/auth-logging.slice";

// const reducers

// the single source of truth :)
const store = configureStore({
  reducer: {
    user: authLoggingReducer,
  },
});

export default store;
