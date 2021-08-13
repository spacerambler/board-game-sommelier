<<<<<<< HEAD
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
=======
// eslint-disable-next-line new-cap
const router = require("express").Router();
const apiRoutes = require("./api");

>>>>>>> ba22a36882b817ba675c8f9c4200751bb7295e04
router.use("/api", apiRoutes);

module.exports = router;
