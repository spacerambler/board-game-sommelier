const { Player } = require("../models");

const playerData = [
  {
    name: "Mike",
    mechanic: ["Cooperative", "Legacy"],
  },
  {
    name: "November",
    mechanic: ["Cooperative", "Dexterity"],
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;
