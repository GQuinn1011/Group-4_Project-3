// TODO replace name with different word

const router = require("express").Router();
const nameRoutes = require("./name");

// name routes
router.use("/names", nameRoutes);

module.exports = router;
