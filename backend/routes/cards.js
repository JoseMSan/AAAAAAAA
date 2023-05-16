const express = require("express");
const router = express.Router();


const User = require("../models/User");
const Card = require("../models/Card");

router.get("/:user/cards", async function (req, res) {
  let userFound = await User.findOne({ user: req.params.user });

  if (userFound != null) {
    res.send(await Card.find({ user: userFound }));
  } else {
    res.sendStatus(400);
  }
});

router.post("/:user/cards", async function (req, res) {
  let userFound = await User.findOne({ user: req.params.user });

  if (userFound != null) {
    let newCard = new Card({
      nombre: req.body.nombre,
      personalidad: req.body.personalidad,
      especie: req.body.especie,
      cumple: req.body.cumple,
      lema: req.body.lema,
      hobbie: req.body.hobbie,
      color: req.body.color,
      user: userFound,
    });
    await newCard.save();
    res.send(newCard);
  } else {
    res.send(400);
  }
});

router.put("/:user/cards/:id_card", async function (req, res) {
  let userFound = await User.findOne({ user: req.params.user });
  let cardFound = await Card.findOne({ _id: req.params.id_card });

  if (userFound != null && cardFound != null) {
    cardFound.nombre = req.body.nombre;
    cardFound.personalidad = req.body.personalidad;
    cardFound.especie = req.body.especie;
    cardFound.cumple = req.body.cumple;
    cardFound.lema = req.body.lema;
    cardFound.hobbie = req.body.hobbie;
    cardFound.color = req.body.color;

    
    await cardFound.save();
  } else {
    res.send(400);
  }
});

router.delete("/:user/cards/:id_card", async function (req, res) {
  let userFound = await User.findOne({ user: req.params.user });
  let cardFound = await Card.findOne({ _id: req.params.id_card });
    res.send("AAAAAAAAAAAA");
  if (userFound != null && cardFound != null) {
    
    await cardFound.deleteOne();
  } else {
    res.send(400);
  }
});

module.exports = router;
