const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./router/router");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use("/data", router);

app.listen(process.env.PORT, () => {
  console.log(`On Port http://localhost:${process.env.PORT}/`);
});
