const router = require("express").Router();
const { Mechanic } = require("../../models");

// find all
router.get("/", (req, res) => {
  //   // find all products
  Mechanic.findAll({
    // include: [Player, Mechanics, User],
  }).then((mechanic) => res.json(mechanic));
});

module.exports = router;
