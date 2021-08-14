const User = require("./User");
const Game = require("./Game");
const Player = require("./Player");
const Mechanic = require("./Mechanic");
const PlayerMechanic = require("./PlayerMechanic");
const GameMechanic = require("./GameMechanic");

Game.belongsToMany(Mechanic, {
  through: {
    model: GameMechanic,
    foreignKey: "game_id",
  },
});

Mechanic.belongsToMany(Game, {
  through: {
    model: GameMechanic,
    foreignKey: "mechanic_id",
  },
});

Player.belongsToMany(Mechanic, {
  through: {
    model: PlayerMechanic,
    foreignKey: "player_id",
  },
});

Mechanic.belongsToMany(Player, {
  through: {
    model: PlayerMechanic,
    foreignKey: "mechanic_id",
  },
});

module.exports = {
  User,
  Mechanic,
  Game,
  Player,
  GameMechanic,
  PlayerMechanic,
};
