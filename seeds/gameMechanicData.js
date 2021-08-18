/* eslint-disable camelcase */
const { GameMechanic } = require("../models");

const gameMechanicData = [
  {
    game_id: 1,
    mechanic_id: 10,
  },
  {
    game_id: 1,
    mechanic_id: 2,
  },
  {
    game_id: 2,
    mechanic_id: 6,
  },
  {
    game_id: 2,
    mechanic_id: 12,
  },
  {
    game_id: 2,
    mechanic_id: 17,
  },
  {
    game_id: 3,
    mechanic_id: 10,
  },
  {
    game_id: 3,
    mechanic_id: 13,
  },
  {
    game_id: 3,
    mechanic_id: 7,
  },
  {
    game_id: 3,
    mechanic_id: 2,
  },
  {
    game_id: 3,
    mechanic_id: 17,
  },
  {
    game_id: 4,
    mechanic_id: 11,
  },
  {
    game_id: 4,
    mechanic_id: 15,
  },
  {
    game_id: 4,
    mechanic_id: 1,
  },
  {
    game_id: 4,
    mechanic_id: 9,
  },
  {
    game_id: 5,
    mechanic_id: 10,
  },
  {
    game_id: 5,
    mechanic_id: 1,
  },
  {
    game_id: 5,
    mechanic_id: 8,
  },
  {
    game_id: 5,
    mechanic_id: 15,
  },
];

const seedGameMechanic = () => GameMechanic.bulkCreate(gameMechanicData);

module.exports = seedGameMechanic;
