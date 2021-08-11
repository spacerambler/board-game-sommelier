const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Mechanics extends Model {}

Mechanics.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "mechanics",
  }
);

module.exports = Mechanics;