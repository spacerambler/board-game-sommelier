const { Mechanic } = require("../models");

const mechanicData = [
  {
    name: "Action Points",
  },
  {
    name: "Area Control",
  },
  {
    name: "Dexterity",
  },
  {
    name: "Bluffing",
  },
  {
    name: "Worker Placement",
  },
  {
    name: "Deck Building",
  },
  {
    name: "Drafting",
  },
  {
    name: "Dice",
  },
  {
    name: "Hand Management",
  },
  {
    name: "Tile Placement",
  },
  {
    name: "Cooperative",
  },
  {
    name: "Semi-Cooperative",
  },
  {
    name: "Resource Management",
  },
  {
    name: "Pick up and Deliver",
  },
  {
    name: "Set Collection",
  },
  {
    name: "Legacy",
  },
  {
    name: "Variable Player Powers",
  },
];

const seedMechanics = () => Mechanic.bulkCreate(mechanicData);

module.exports = seedMechanics;
