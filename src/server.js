const express = require("express");
const axios = require("axios");
const app = express();
const port = 3001;
const url = "http://localhost:3001/api";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/apts.json");
});

app.get("/api/id", (req, res) => {
  res.sendFile(__dirname + "/aptsId.json");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
