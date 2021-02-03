const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./router/router");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use("/data", router);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(process.env.PORT, () => {
      console.log(`On Port http://localhost:${process.env.PORT}/`);
    });
  })
  .catch((e) => {
    console.log(e);
    return e;
  });
