const express = require("express");
const app = require("../routes");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

module.exports = app;
