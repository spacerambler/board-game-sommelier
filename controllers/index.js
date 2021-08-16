// eslint-disable-next-line new-cap
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use("*", (req, res) => {
  res.send("<h1>Board Game Sommelier</h1>");
});

module.exports = router;
