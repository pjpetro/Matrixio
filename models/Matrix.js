const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatrixSchema = new Schema({
  
  matrix: Object
  
});

const Matrix = mongoose.model("Matrix", MatrixSchema);

module.exports = Matrix;