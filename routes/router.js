const express = require("express");
const router = express.Router();
const home = require("./home/homeController/HomeController.js");

router.use("/", home);

module.exports = router;