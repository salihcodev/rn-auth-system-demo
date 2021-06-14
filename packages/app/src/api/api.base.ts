// >>>> import pkgs:
import axios from "axios";

// >>>> import utils: ... anything created-modified by the developer'
import { getLocalDataAsObj } from "../utils/device-storage-controllers/localStorage.controllers";

export const baseUrl: string = `https://rn-auth-mern-demo.herokuapp.com/api`;

// create a single handler..
const APIHandler = axios.create({ baseURL: baseUrl });

// ..make a verification with every future sent request and sent token:
APIHandler.interceptors.request.use((req) => {
  // const _getLocalDataAsObj = async () => {
  //   const data = await getLocalDataAsObj("currentAuthedUser");

  //   // get the current user's token
  //   const { token }: { token: string } = data ? JSON.parse(data) : null;

  //   if (token) {
  //     req.headers.Authorization = `Bearer ${token}`;
  //   }
  // };
  // _getLocalDataAsObj();

  // finally return the req with auth headers:
  return req;
});

export default APIHandler;
