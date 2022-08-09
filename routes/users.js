var express = require("express");
var router = express.Router();
var data = require("../database/users");

//console.log(JSON.stringify(data));

/* GET users listing. */

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/all", function (req, res, next) {
  res.json(data);
});

module.exports = router;
