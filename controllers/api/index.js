<<<<<<< HEAD
const router = require("express").Router();

=======
// eslint-disable-next-line new-cap
const router = require("express").Router();
>>>>>>> ba22a36882b817ba675c8f9c4200751bb7295e04
const userRoutes = require("./userRoutes");
const playerRoutes = require("./playerRoutes");
const gameRoutes = require("./gameRoutes");
const mechanicsRoutes = require("./mechanicsRoutes");

router.use("/users", userRoutes);
<<<<<<< HEAD
router.use("/players", playerRoutes);
router.use("games", gameRoutes);
router.use("mechanics", mechanicsRoutes);
=======
router.use("/player", playerRoutes);
router.use("/games", gameRoutes);
router.use("/mechanics", mechanicsRoutes);
>>>>>>> ba22a36882b817ba675c8f9c4200751bb7295e04

module.exports = router;
