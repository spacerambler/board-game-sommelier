// eslint-disable-next-line new-cap
const router = require("express").Router();
const { Game, Player, Mechanics, User } = require("../../models");

// get  all
router.get("/", (req, res) => {
  //   // find all products
  Game.findAll({
    // include: [Player, Mechanics, User],
  }).then((game) => res.json(game));
});

// get  one
router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // // be sure to include its associated Products

  Game.findOne({
    where: {
      id: req.params.id,
    },
    include: [Mechanics, User],
  }).then((product) => res.json(product));
});

// post to create new game
router.post("/", (req, res) => {
  Game.create(req.body).then((newGame) => res.json(newGame));
});

// put in order to edit game
router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Game.findOne({
    where: {
      id: req.params.id,
    },
  }).then((updateGame) => res.json(updateGame));
});

// delete function
router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Game.findOne({
    where: {
      id: req.params.id,
    },
  }).then((game) => res.json(game));
});

module.exports = router;
