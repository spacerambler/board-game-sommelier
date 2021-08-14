const router = require("express").Router();
const { Game, Player, Mechanics, User } = require("../../models");

// get  all
router.get("/", (req, res) => {
  //   // find all products
  Game.findAll({
    include: [Player, Mechanics, User],
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
    include: [Player, Mechanics, User],
  }).then((product) => res.json(product));
});

// post to create new game
router.post("/", (req, res) => {
  Game.create(req.body).then((newGame) => res.json(newGame));
});
// put in order to edit game

// delete function
