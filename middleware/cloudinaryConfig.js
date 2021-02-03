const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

const { v2 } = require("cloudinary");

const cloudinary = require("cloudinary").v2;

cloudinaryConfig = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  next();
};

module.exports.cloudinaryConfig = cloudinaryConfig;
