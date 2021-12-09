const express = require("express");
const router = express.Router();
const HomeService = require("../homeService/HomeService.js");
const homeService = new HomeService();


router.get("/",function(req,res){
    res.send(homeService.massge());
});

module.exports = router

