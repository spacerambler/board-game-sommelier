// eslint-disable-next-line new-cap
const router = require("express").Router();
const { Game, GameMechanic, Mechanic } = require("../../models");
const withAuth = require("../../utils/auth.js");

// get  one
router.get("/:id", async (req, res) => {
  try {
    let mechanicsData = await Mechanic.findAll();
    mechanicsData = mechanicsData.map((mechanic) =>
      mechanic.get({ plain: true })
    );

    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Mechanic,
          through: GameMechanic,
          // as: "nonsense",
        },
      ],
    });
    if (!gameData) {
      res.status(404).json({ message: "No game found with this id" });
    }

    console.log(gameData);
    res.render("game-edit", { gameData, mechanicsData });
    // res.status(200).json(playerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// post to create new game
router.post("/", withAuth, (req, res) => {
  Game.create(req.body).then((newGame) => res.json(newGame));
});

// put in order to edit game
router.put("/:id", withAuth, (req, res) => {
  // update a category by its `id` value
  Game.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((updateGame) => res.json(updateGame));
});

// delete function
router.delete("/:id", withAuth, (req, res) => {
  // delete a category by its `id` value
  Game.destroy({
    where: {
      id: req.params.id,
    },
  }).then((game) => res.json(game));
});

module.exports = router;
