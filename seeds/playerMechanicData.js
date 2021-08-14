/* eslint-disable camelcase */
const { PlayerMechanic } = require("../models");

const playerMechanicData = [
  {
    player_id: 1,
    mechanic_id: 11,
  },
  {
    player_id: 1,
    mechanic_id: 16,
  },
  {
    player_id: 2,
    mechanic_id: 11,
  },
  {
    player_id: 2,
    mechanic_id: 3,
  },
];

const seedPlayerMechanic = () => PlayerMechanic.bulkCreate(playerMechanicData);

module.exports = seedPlayerMechanic;
