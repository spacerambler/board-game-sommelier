const { Game } = require("../models");

const gameData = [
  {
    name: "Carcassonne",
    image: "",
    mechanics: ["Tile Placement", "Area Control"],
  },
  {
    name: "DC Comics Deck Building Game",
    image: "",
    mechanics: [
      "Deck Building",
      "Semi-Cooperative",
      "Drafting",
      "Variable Player Powers",
    ],
  },
  {
    name: "Terraforming Mars",
    image: "",
    mechanics: [
      "Tile Placement",
      "Resource Management",
      "Drafting",
      "Area Control",
      "Variable Player Powers",
    ],
  },
  {
    name: "Pandemic",
    image: "",
    mechanics: [
      "Cooperative",
      "Set Collection",
      "Action Points",
      "Hand Management",
    ],
  },
  {
    name: "Takenoko",
    image: "",
    mechanics: ["Dice", "Set Collection", "Action Points", "Tile Placement"],
  },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
