const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const warehouseSchema = new Schema({
  warehouseName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },

  availability: {
    type: String,
  },


});
const Warehouse = mongoose.model("Warehouse", warehouseSchema);
module.exports = Warehouse;
