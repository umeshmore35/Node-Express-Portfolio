const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`On Port http://localhost:${process.env.PORT}/`);
});
