/* eslint-disable camelcase */
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class PlayerMechanic extends Model {}

PlayerMechanic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "player",
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
    modelName: "player_mechanic",
  }
);

module.exports = PlayerMechanic;
