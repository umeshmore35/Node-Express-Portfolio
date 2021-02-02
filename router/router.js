const express = require("express");
const { getProfileData } = require("../controllers/getdata");

const router = express.Router();

router.route("/profile").get(getProfileData);

module.exports.router = router;
