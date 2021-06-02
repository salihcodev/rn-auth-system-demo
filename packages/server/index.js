// >>>> import pkgs:
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'

// >>>> initialize the app:
const PORT = process.env.PORT || 8000;
const app = express();
// >>>> configs:
// env conf
dotenv.config();

// insert the cors conf
app.use(cors());

// parsing the body, encode urls:
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// >>>> setup routes:
// initial route
app.get("/", (req, res) => res.send("Hello World"));

const connectionToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // >>>> serve the app:
    app.listen(PORT, () => {
      console.log(`Successfully connected to the BD`);
      console.log(`Served on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

connectionToDatabase();

// clean the console warnings
mongoose.set("useFindAndModify", false);
