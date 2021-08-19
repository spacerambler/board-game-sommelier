const seedMechanics = require("./mechanicData.js");
const seedGames = require("./gameData.js");
const seedPlayers = require("./playerData.js");
const seedPlayerMechanic = require("./playerMechanicData.js");
const seedGameMechanic = require("./gameMechanicData.js");
const seedUser = require("./userData.js");

const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedMechanics();
  console.log("\n----- MECHANICS SEEDED -----\n");

  await seedGames();
  console.log("\n----- GAMES SEEDED -----\n");

  await seedPlayers();
  console.log("\n----- PLAYERS SEEDED -----\n");

  await seedPlayerMechanic();
  console.log("\n----- PLAYER MECHANICS SEEDED -----\n");

  await seedGameMechanic();
  console.log("\n----- GAME MECHANICS SEEDED -----\n");

  await seedUser();
  console.log("\n----- USER SEEDED -----\n");

  process.exit(0);
};

seedDatabase();
