const { Player } = require("../models");

const playerData = [
  {
    name: "Mike",
    mechanics: ["Cooperative", "Legacy"],
  },
  {
    name: "November",
    mechanics: ["Cooperative", "Dexterity"],
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;
