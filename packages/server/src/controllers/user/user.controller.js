// >>>> import pkgs:
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// >>>> import utils: 'routers, models, ... anything created-modified by the developer'
import UserModel from "../../models/user/user.model.js";

// fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const allRegisteredUsers = await UserModel.find({});
    res.status(200).json(allRegisteredUsers);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Something went wrong with the server ${error}` });
  }
};

// >>>> LOGIN
export const loginAuth = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check wether it's an existed user or not:
    const existedUser = await UserModel.findOne({ email });
    const { _id: exiId, password: exiPassword, email: exiEmail } = existedUser;

    if (!existedUser)
      return res.status(401).json({
        message: `Sorry, There's no registered user with this ${email}!`,
      });

    // if it is, compare both
    // passwords match hashed-provided password with his current password
    const isPasswordMatches = await bcrypt.compare(password, exiPassword);

    // pass an error if it not
    if (!isPasswordMatches)
      return res
        .status(401)
        .json({ message: "Sorry, In correct email or password! " });

    // make user token
    const authedUserToken = jwt.sign(
      { email: exiEmail, id: exiId },
      process.env.JWT_SECRET,
      { expiresIn: `1h` }
    );

    // send back the user object, and the token
    res.status(200).json({ result: existedUser, token: authedUserToken });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Something went wrong with the server ${error}` });
  }
};

// >>>> SIGNUP:
export const signupAuth = async (req, res) => {
  const { firstName, lastName, email, password, confirmedPassword } = req.body;

  try {
    // check wether it's an existed user or not:
    const existedUser = await UserModel.findOne({ email });

    if (existedUser)
      return res.status(401).json({
        message: `This email is already registered!`,
      });

    // check if the passwords are matching each other
    if (password !== confirmedPassword)
      return res
        .status(401)
        .json({ message: "Sorry, Password does not match!" });

    // if it
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const createNewUser = await UserModel.create({
      email: email,
      name: `${firstName} ${lastName}`,
      password: hashedPassword,
    });

    // make user token
    const authedUserToken = jwt.sign(
      { email: email, id: createNewUser._id },
      process.env.JWT_SECRET,
      { expiresIn: `1h` }
    );

    // send back the user object, and the token
    res.status(201).json({ result: createNewUser, token: authedUserToken });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Something went wrong with the server ${error}` });
  }
};
