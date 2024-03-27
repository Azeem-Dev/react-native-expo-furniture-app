const mongoose = require("./db");

const app = require("./middlewares");

mongoose
  .connect(process.env.MONGO_URL)
  .then((c) => console.log("DB Connected"))
  .catch((err) => console.error(err));

module.exports = app;
