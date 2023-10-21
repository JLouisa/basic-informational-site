const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs/promises");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5137;

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
