const router = require("express").Router();
const matrixController = require("../../controllers/matrixController");

//Matches with "/api/matrix"
router
  .route("/")
  .get(matrixController.findAll)
  .post(matrixController.create);

//Matches with "/api/matrix/:id"
router
  .route("/:id")
  .get(matrixController.findById)
  .put(matrixController.update)
  .delete(matrixController.delete);

module.exports = router;
