const User = require("../models/user");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await User.findOne({ email });
    
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = await User.create({ username, email, password });

    res.status(200).json({ msg: "Signup Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), userDetails: userCreated });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const user = await userExist.matchPassword(password);

    if (user) {
      res.status(200).json({ msg: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString(), userDetails: userExist });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};


const user = async (req, res) => {
  try {
    const userData = req.user;
    
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user route ${error}`);
    
  }
};

module.exports = { signup, login, user };
