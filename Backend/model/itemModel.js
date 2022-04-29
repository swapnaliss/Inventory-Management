const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },

  unit: {
    type: Number,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  selingPrice: {
    type: String,
    required: true,
  },
  costPrice: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  openingStock: {
    type: String,
    required: true,
  },
  reorderPoint: {
    type: String,
    required: true,
  },
  preferedVendor: {
    type: String,
    required: true,
  },
},
    {
         timeStamps : true 
     },
);
const Item = mongoose.model("item", itemSchema);

module.exports = Item; 