const express = require("express");
const router = express.Router();

const User = require("../models/User");

var data = require("../data");
var cardsData = data.users;
var indexOfUser = data.indexOfUser;

router.post("/", async function (req, res) {
  let userFound = await User.findOne({user: req.body.user})

  if (userFound != null) {
    if (userFound.password == req.body.password) {
      return res.json(userFound);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
