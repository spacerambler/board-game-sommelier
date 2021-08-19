const router = require("express").Router();
const {
  Game,
  Mechanic,
  Player,
  GameMechanic,
  PlayerMechanic,
} = require("../../models");

let dislikedMechanics = [];
let mechs = [];

router.post("/", async (req, res) => {
  try {
    dislikedMechanics = [];
    // PLAYERS FROM SEARCH FORM
    const attendingPlayers = req.body;
    console.log("ATTENDING PLAYERS", attendingPlayers);

    // BUILD DISLIKED MECHANICS DATA
    attendingPlayers.forEach(async (player) => {
      mechs = await PlayerMechanic.findAll({
        where: {
          player_id: player,
        },
      });
      console.log("PLAYER OBJECTS", mechs);
      mechs.forEach((mech) => {
        const m = mech.dataValues.mechanic_id;
        dislikedMechanics.push(m);
      });
      dislikedMechanics = [...new Set(dislikedMechanics)];
      console.log("DISLIKED", dislikedMechanics);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
