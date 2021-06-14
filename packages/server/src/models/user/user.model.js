// >>>> import pkgs:
import mongoose from "mongoose";
const { Schema, model } = mongoose;

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String || Number, require: true },
  id: { type: String },
});

// create the model of the user to make use of it:
const UserModel = model("UserModel", userSchema);
export default UserModel;
