const mongoose = require("./db");

const app = require("./routes");

mongoose
  .connect(process.env.MONGO_URL)
  .then((c) => console.log("DB Connected"))
  .catch((err) => console.error(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to database:", db.name);
});

module.exports = app;
