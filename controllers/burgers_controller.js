var express = require("express");
var router = express.Router();
// Importing model 
var burger = require("../models/burger.js");
// routes 
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/", function(req, res) {
  burger.insertOne(["burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});
//my brian hurts and i'm stuck now....