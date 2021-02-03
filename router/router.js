const express = require("express");
const { getProfileData } = require("../controllers/getdata");
const { createProfileData } = require("../controllers/uploadeData");
const { cloudinaryConfig } = require("../middleware/cloudinaryConfig");
const { saveImageCloud } = require("../middleware/saveImageCloud");
const { uploadImage } = require("../middleware/uploadImage");

const router = express.Router();
router.route("/profile").get(getProfileData);
router
  .route("/createProfile")
  .post(uploadImage, cloudinaryConfig, saveImageCloud, createProfileData);

module.exports.router = router;
