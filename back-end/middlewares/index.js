const express = require("express");
var cors = require("cors");

const app = express();

// ADD THIS
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

module.exports = app;
