const User = require("./User");
const Game = require("./Game");
const Mechanics = require("./Mechanics");
const Player = require("./Player");

Game.hasMany(Mechanics, {
  foreignKey: 'mechanics_id',
  onDelete: 'CASCADE',
});

Mechanics.hasMany(Game, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE',
});

Player.hasMany(Mechanics, {
  foreignKey: 'player_id',
  onDelete: 'CASCADE',
});

Mechanics.hasMany(Player, {
  foreignKey: 'mechanics_id'
  onDelete: 'CASCADE',
});


module.exports = {
  User,
  Mechanics,
  Game,
  Player,
};
