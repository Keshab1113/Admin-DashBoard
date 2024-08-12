const bcrypt = require('bcrypt');
const passport = require("passport");
const User = require('../models/profile'); // Assuming you have a User model
require("../lib/passportLocal")(passport);

const saltRounds = 10; // Define your salt rounds for hashing

const signup = async (req, res, next) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.json({ success: false, msg: 'All fields are required.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.json({ success: false, msg: 'Email is already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      username,
      email,
      pwdHash: hashedPassword,
      role: role || 3, // Default role if not provided
    });

    // Save the user to the database
    await newUser.save();

    // Automatically log in the user after signup
    req.login(newUser, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({
        success: true,
        msg: 'Signup successful.',
        user: newUser
      });
    });
  } catch (err) {
    return next(err);
  }
};

const login = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json({
        success: false,
        msg: info.msg
      });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({
        success: true,
        msg: 'Login successful.',
        user
      });
    });
  })(req, res, next);
};

const logout = async (req, res) => {
  req.logout(err => {
    if (err) throw err;
    req.session.destroy(() => {
      res.clearCookie('app_name.sid');
      res.json({
        success: true,
        msg: 'Logout successful.'
      });
    });
  });
};

const checkAuth = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user, isAuthenticated: true });
  } else {
    res.json({ user: null, isAuthenticated: false });
  }
};

module.exports = { signup, login, logout, checkAuth };
