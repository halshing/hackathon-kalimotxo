const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
// const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
