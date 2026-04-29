const express = require("express");
const dotenv = require("dotenv");
const pageRoute = require("./routes/pageRoute");
const path = require("path");

dotenv.config({
  path: "./config/env/config.env",
});
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", pageRoute);

app.listen(PORT, () => {
  console.log(`${PORT} running`);
});
