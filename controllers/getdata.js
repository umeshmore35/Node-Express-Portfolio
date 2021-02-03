const mongoose = require("mongoose");
const { Profile } = require("../module/profileSchema");
const selectQuery =
  "userId name email address phoneNo aboutMe  imageUrl createdAt updatedAt -_id";

const getProfileData = async (req, res, next) => {
  try {
    const tasknw = req.query.select;

    if (tasknw) {
      const task = await Task.find().select(`${tasknw} ${selectQuery}`);

      return res.send(task);
    } else {
      const data = await Profile.find();

      res.send(data);
    }
  } catch (e) {
    console.log(e);
    return e;
  }
};

module.exports.getProfileData = getProfileData;
