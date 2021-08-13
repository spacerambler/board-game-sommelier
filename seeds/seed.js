const seedMechanics = require("./mechanicData");
const seedGames = require("./gameData.json");
const seedPlayers = require("./playerData.json");

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

  process.exit(0);
};

seedDatabase();
