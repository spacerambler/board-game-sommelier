// eslint-disable-next-line new-cap
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const playerRoutes = require("./playerRoutes");
const gameRoutes = require("./gameRoutes");
const mechanicsRoutes = require("./mechanicsRoutes");

router.use("/users", userRoutes);
router.use("/player", playerRoutes);
router.use("/games", gameRoutes);
router.use("/mechanics", mechanicsRoutes);

module.exports = router;
