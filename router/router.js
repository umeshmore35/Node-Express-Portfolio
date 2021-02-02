const express = require("express");
const { profileData } = require("../controllers/getdata");

const router = express.Router();

router.route("/profile").get(profileData);

module.exports.router = router;
