// >>>> import pkgs:

// >>>> import utils:
import APIHandler from "../api.base";
import {
  authLoginFormTypes,
  authSignupFormTypes,
} from "../../interfaces/auth/auth.interfaces";
// TODO: arrange types & interfaces folder:

// >>>> user apis kooks:
// login:
export const authLogin = (loginFormData: authLoginFormTypes) =>
  APIHandler.post("/auth/login", loginFormData);

// signup:
export const authSignup = (signupFormData: authSignupFormTypes) =>
  APIHandler.post("/auth/signup", signupFormData);
