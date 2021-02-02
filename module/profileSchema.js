const mongoose = require("mongoose");
const uniquid = require("uniquid");
const { profileData } = require("../controllers/getdata");

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uniquid(),
  },

  name: {
    type: String,
  },

  email: {
    type: String,
  },

  address: {
    type: String,
  },

  phoneNo: {
    type: String,
  },

  aboutMe: {
    type: String,
  },

}
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileData);

module.exports.Profile = Profile;
