/* eslint-disable camelcase */
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class GameMechanic extends Model {}

GameMechanic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "id",
      },
    },
    mechanic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "mechanic",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game_mechanic",
  }
);

module.exports = GameMechanic;
