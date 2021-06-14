// >>>> import pkgs:
import express from "express";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import {
  loginAuth,
  signupAuth,
  getAllUsers,
} from "../../controllers/user/user.controller.js";

// initialize the router
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/login", loginAuth);
router.post("/signup", signupAuth);

export default router;
