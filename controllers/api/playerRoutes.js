/* eslint-disable new-cap */
const router = require("express").Router();
const { Player, Mechanics, PlayerMechanic } = require("../../models");

// get all players
router.get("/", async (req, res) => {
  try {
    const playerData = await Player.findAll({
      include: [
        {
          model: PlayerMechanic,
          attributes: ["mechanic_id"],
        },
      ],
    });
    res.status(200).json(playerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one player by 'id' value
router.get("/:id", async (req, res) => {
  try {
    const playerData = await Player.findByPk(req.params.id, {
      include: [
        {
          model: Mechanics,
          attributes: ["mechanics_name"],
        },
      ],
    });
    if (!playerData) {
      res.status(404).json({ message: "No player found with this id" });
    }

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new player
router.post("/", async (req, res) => {
  try {
    const playerData = await Player.create(req.body);
    res.status(200).json(playerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
