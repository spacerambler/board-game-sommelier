const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Mechanic extends Model {}

Mechanic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "mechanic",
  }
);

module.exports = Mechanic;
