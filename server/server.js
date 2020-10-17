const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(1337);
