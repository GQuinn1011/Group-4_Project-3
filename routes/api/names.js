// TODO Replace name with different word
const router = require("express").Router();
const namesController = require("../../controllers/namesController");

// Matches with "/api/names"
router.route("/")
  .get(namesController.findAll)
  .post(namesController.create);

// Matches with "/api/names/:id"
router
  .route("/:id")
  .get(namesController.findById)
  .put(namesController.update)
  .delete(namesController.remove);

module.exports = router;
