// eslint-disable-next-line new-cap
const router = require("express").Router();
const { Player, PlayerMechanic, Mechanic } = require("../../models");
const withAuth = require("../../utils/auth.js");

const playerMechanics = [];

// CREATE NEW POST
router.get("/new-player", (req, res) => {
  res.render("new-player");
});

// create a new player, withAuth
router.post("/new-player", async (req, res) => {
  try {
    const playerData = await Player.create(req.body);
    res.status(200).json(playerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// find one player by 'id' value
router.get("/:id", async (req, res) => {
  try {
    let mechanicsData = await Mechanic.findAll();
    mechanicsData = mechanicsData.map((mechanic) =>
      mechanic.get({ plain: true })
    );

    const playerData = await Player.findByPk(req.params.id, {
      include: [
        {
          model: Mechanic,
          through: PlayerMechanic,
          // as: "nonsense",
        },
      ],
    });
    // console.log(playerData.mechanics);
    const playerMechanicData = playerData.mechanics;
    playerMechanicData.forEach(async (mech) => {
      const m = mech.dataValues.id;
      playerMechanics.push(m);
    });

    if (!playerData) {
      res.status(404).json({ message: "No player found with this id" });
    }

    console.log(playerMechanics);
    res.render("player-edit", { playerData, mechanicsData, playerMechanics });
    // res.status(200).json(playerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
