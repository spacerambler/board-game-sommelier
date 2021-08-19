const router = require("express").Router();
const homeRoutes = require("./homeRoutes.js");
const apiRoutes = require("./api");
// const { Game, Player, Mechanic } = require("../models");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
