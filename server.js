const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cimewRouter = require("./routes/cimew-page");

dotenv.config({
  path: "./config/env/config.env",
});

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.ejs"));
});

app.use("/cimew-page", cimewRouter);

app.listen(PORT, () => {
  console.log(`${PORT} Running`);
});
