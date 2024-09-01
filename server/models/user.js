const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    default: "+91 9999999999"
  },
  projectName: {
    type: String,
    default: "ABC Project"
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  companyName: {
    type: String,
    default: "XYZ Company"
  },
  address: {
    type: String,
    default: "West Bengal, India"
  }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = async function () { 
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },
      process.env.JWT_SECRECT_KEY,
      {
        expiresIn: "10d",
      }
    )
  } catch (error) {
    console.log(error);
    
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;         