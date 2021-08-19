const { User } = require("../models");

const userData = [
  {
    name: "Mike",
    email: "ChampionMike42@gmail.com",
    password: "password1234",
  },
  {
    name: "Keely",
    email: "keelybailey3@gmail.com",
    password: "MissyCat!",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
