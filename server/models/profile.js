const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  user: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  timeZone: {
    type: String,
    default: 'Asia/Kolkata'
  },
  projectName: {
    type: String,
    default: "MANUFACTURING INTELLIGENCE SOFTWARE"
  },
  role: {
    type: Number,
    enum: [1, 2, 3, 4],
    default: 3
  },
  bgNavbar: {
    type: String,
    default: '#557181'
  },
  txClrNavbar: {
    type: String,
    default: '#ffffff'
  },
  addedBy: {
    type: String
  },
  company: {
    type: String
  },
  pwdHash: String,
  otpHash: String,
  isAlertRequire: {
    type: Boolean,
    default: false
  },
  devices: Array,
  alertEmails: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("Profile", profileSchema);               