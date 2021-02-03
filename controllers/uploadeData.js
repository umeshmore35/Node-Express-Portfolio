const { json } = require("express");
const { Profile } = require("../module/profileSchema");

createProfileData = async (req, res, next) => {
  console.log(req.body);

  const User = new Profile({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phoneNo: req.body.phoneNo,
    aboutMe: req.body.aboutMe,
    imageUrl: req.body.imageUrl,
  });

  User.save()
    .then((data) => {
      console.log(data);
      res.send("done");
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

module.exports.createProfileData = createProfileData;
