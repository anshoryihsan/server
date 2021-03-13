require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

app.use(logger("dev"));
app.use("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoutes = require("./src/Route/index");
app.use("/api/v1", indexRoutes);

app.get("/", (req, res) => {
  res.send("welcome!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
