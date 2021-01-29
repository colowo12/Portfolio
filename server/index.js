const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/api", require("./api"));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
