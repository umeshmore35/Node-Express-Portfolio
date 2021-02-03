const { uploader } = require("cloudinary");

saveImageCloud = (req, res, next) => {
  uploader
    .upload(
      `data:${req.file.mimetype};base64,` + req.file.buffer.toString("base64")
    )
    .then((data) => {
      req.body.imageUrl = data.url;
      next();
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

module.exports.saveImageCloud = saveImageCloud;
