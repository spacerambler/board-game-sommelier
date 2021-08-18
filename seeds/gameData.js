const { Game } = require("../models");

const gameData = [
  {
    name: "Carcassonne",
    image: "",
  },
  {
    name: "DC Comics Deck Builder",
    image: "",
  },
  {
    name: "Terraforming Mars",
    image: "",
  },
  {
    name: "Pandemic",
    image: "",
  },
  {
    name: "Takenoko",
    image: "",
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
