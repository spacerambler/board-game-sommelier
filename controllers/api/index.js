// eslint-disable-next-line new-cap
const router = require("express").Router();

const userRoutes = require("./userRoutes.js");
const playerRoutes = require("./playerRoutes.js");
const gameRoutes = require("./gameRoutes.js");
// const mechanicsRoutes = require("./mechanicsRoutes.js");

router.use("/users", userRoutes);
router.use("/players", playerRoutes);
router.use("/games", gameRoutes);
// router.use("/mechanics", mechanicsRoutes);

module.exports = router;
