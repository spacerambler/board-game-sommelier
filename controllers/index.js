const router = require("express").Router();
const apiRoutes = require("./api");
const { Game, Player, Mechanic } = require("../models");

router.use("/api", apiRoutes);

// router.use("*", (req, res) => {
//   res.render("homepage");
// });

router.get("*", async (req, res) => {
  try {
    let playersData = await Player.findAll();
    playersData = playersData.map((player) => player.get({ plain: true }));
    res.render("homepage", { playersData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/players", async (req, res) => {
  try {
    let playersData = await Player.findAll();
    playersData = playersData.map((player) => player.get({ plain: true }));
    res.render("players", { playersData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/games", async (req, res) => {
  try {
    let gamesData = await Game.findAll();
    gamesData = gamesData.map((game) => game.get({ plain: true }));
    res.render("games", { gamesData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mechanics", async (req, res) => {
  try {
    let mechanicsData = await Mechanic.findAll();
    mechanicsData = mechanicsData.map((mechanic) =>
      mechanic.get({ plain: true })
    );

    res.render("mechanics", { mechanicsData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
