const router = require("express").Router();
const {
  Game,
  Mechanic,
  Player,
  GameMechanic,
  PlayerMechanic,
} = require("../../models");

const collection = Game.findAll();
const allGames = [];
let dislikedMechanics = [];
const indGame = [];
let gameMechs = [];
let playerMechs = [];
const results = [];
let isLiked = true;
let collisions = [];

router.post("/", async (req, res) => {
  try {
    // CLEAR OUT ARRAY
    dislikedMechanics = [];

    // PLAYERS FROM SEARCH FORM
    const attendingPlayers = req.body;
    // console.log("ATTENDING PLAYERS", attendingPlayers);

    // BUILD DISLIKED MECHANICS DATA
    attendingPlayers.forEach(async (player) => {
      playerMechs = await PlayerMechanic.findAll({
        where: {
          player_id: player,
        },
      });
      // console.log("PLAYER OBJECTS", playerMechs);
      playerMechs.forEach((mech) => {
        const m = mech.dataValues.mechanic_id;
        dislikedMechanics.push(m);
      });
      dislikedMechanics = [...new Set(dislikedMechanics)];
      console.log("DISLIKED", dislikedMechanics);
    });

    // GET ALL GAME IDs IN AN ARRAY
    const gameCollection = await Game.findAll();
    gameCollection.forEach((game) => {
      const g = game.dataValues.id;
      // console.log(game.dataValues.id);
      allGames.push(g);
    });
    console.log("ALLGAMES", allGames);

    // GET MECHANICS FOR EACH GAME
    allGames.forEach(async (game) => {
      gameMechs = [];

      let checkedGame;
      gameMechs = await GameMechanic.findAll({
        where: {
          game_id: game,
        },
      });
      collisions = [];

      // CHECKING FOR COLLISIONS
      gameMechs.forEach(async (mech) => {
        isLiked = true;
        const checkedGame = mech.dataValues.mechanic_id;
        console.log("IN FOREACH", checkedGame);
        if (dislikedMechanics.indexOf(checkedGame) !== -1) {
          isLiked = false;
        }

        collisions.push(isLiked);
      });
      console.log("GAME", game);
      console.log("COLLISIONS", collisions);
      console.log("COLLISIONS Len", collisions.length);

      const t = 0;
      let f = 0;
      for (i = 0; i < collisions.length; i++) {
        // let addGame = true;
        if (collisions[i] !== true) {
          f++;
        }
      }

      if (f === 0) {
        results.push(game);
      }

      console.log("RESULTS", results);
      // res.render("homepage", results);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
