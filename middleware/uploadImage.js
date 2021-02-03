const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });
const uploadImage = upload.single("image");

module.exports.uploadImage = uploadImage;
