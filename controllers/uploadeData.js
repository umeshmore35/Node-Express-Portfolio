createProfileData = async (req, res, next) => {
  console.log(req.body);
  res.send("done");
};

module.exports.createProfileData = createProfileData;
