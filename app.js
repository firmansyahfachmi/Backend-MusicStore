const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");
const helmet = require("helmet");

const router = require("./src/routes/root");

const app = express();
const port = process.env.PORT || 4000;
const nodeEnv = process.env.NODE_ENV || "Development";

app.use(helmet({
  xssFilter: true
}));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening in ${nodeEnv} mode on port ${port} `);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/anekamusik", router);

module.exports = app;