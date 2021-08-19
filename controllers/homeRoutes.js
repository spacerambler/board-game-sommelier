const sequelize = require("../config/connection");
const { Game, Player, Mechanic, User } = require("../models");
const router = require("express").Router();

// HOMEPAGE
router.get("/", async (req, res) => {
  try {
    let playersData = await Player.findAll();
    playersData = playersData.map((player) => player.get({ plain: true }));
    res.render("homepage", { playersData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// PLAYERS ROUTE
router.get("/players", async (req, res) => {
  try {
    let playersData = await Player.findAll();
    playersData = playersData.map((player) => player.get({ plain: true }));
    res.render("players", { playersData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GAMES ROUTE
router.get("/games", async (req, res) => {
  try {
    let gamesData = await Game.findAll();
    gamesData = gamesData.map((game) => game.get({ plain: true }));
    res.render("games", { gamesData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// MECHANICS ROUTE
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

// LOGIN ROUTE
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
