// eslint-disable-next-line new-cap
const router = require("express").Router();
const { Player, PlayerMechanic, Mechanic } = require("../../models");
const withAuth = require("../../utils/auth.js");

// find one player by 'id' value
router.get("/:id", async (req, res) => {
  try {
    const playerData = await Player.findByPk(req.params.id, {
      include: [
        {
          model: Mechanic,
          through: PlayerMechanic,
          // as: "nonsense",
        },
      ],
    });
    if (!playerData) {
      res.status(404).json({ message: "No player found with this id" });
    }

    res.status(200).json(playerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new player, withAuth
router.post("/", withAuth, async (req, res) => {
  try {
    const playerData = await Player.create(req.body);
    res.status(200).json(playerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updating a player, withAuth
router.put("/:id", withAuth, async (req, res) => {
  const playerData = await Player.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  return res.json(playerData);
});

// Delete a player, with Auth
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const playerData = await Player.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!playerData) {
      res.status(404).json({ message: "No player found with this id" });
      return;
    }

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
