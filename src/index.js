// import express from 'express';

const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const url = "http://localhost:3001/api";
//   "http://ec2-54-232-9-90.sa-east-1.compute.amazonaws.com:5000/oportunidades/v1/oportunidades";

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("Hello world via express");
// });
app.use(express.static("assets"));
app.use(express.static("content"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(url);
    // res.json(response.data.data);
    const data = response.data.data;
    res.render("home", { data });
    // res.render("home");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/apts/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const response = await axios.get(`${url}/id`);
    let data = [];
    for (let i = 0; i < response.data.data.length; i++) {
      if (response.data.data[i].idOportunidade === parseInt(id)) {
        data = response.data.data[i];
      }
    }
    res.render("property", { data });
  } catch (error) {
    console.error(error);
    res.status(500).json("Apartment not found");
  }
});

// app.set('views', './views');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
