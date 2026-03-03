const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cimewRouter = require("./routes/cimew-page");

dotenv.config({
  path: "./config/env/config.env",
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/cimew-page", cimewRouter);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
