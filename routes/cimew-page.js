const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs", {
    username: process.env.Github_Username,
  });
});

module.exports = router;
