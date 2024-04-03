const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello this is my twitter iD @mayanktwt07");
});

app.get("/login", (req, res) => {
  res.send("<h1>hi this is mayank</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
