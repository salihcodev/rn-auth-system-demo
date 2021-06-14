// >>>> import pkgs:
import { createAsyncThunk } from "@reduxjs/toolkit";

// >>>> import utils:
import { authLogin, authSignup } from "../../../api/auth/auth.apis";
import {
  authLoginFormTypes,
  authSignupFormTypes,
} from "../../../interfaces/auth/auth.interfaces";

// >>>> actions handlers
// signup handlers:
export const authSignupHandler = createAsyncThunk(
  `auth/signup`,
  async (signupFormData: authSignupFormTypes) => {
    const { data } = await authSignup(signupFormData);

    return data;
  }
);

// login handlers:
export const authLoginHandler = createAsyncThunk(
  `authUSer/login`,
  async (loginFormData: authLoginFormTypes) => {
    const { data } = await authLogin(loginFormData);

    return data;
  }
);
