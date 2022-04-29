const Item = require("../model/itemModel");
const asyncHandler = require("express-async-handler");

const getItem= asyncHandler(async (req, res) => {
  const item = await Item.find();
  console.log(item);
  res.json(item);
});
const createItem = asyncHandler(async (req, res) => {
  const {
    itemName,
    unit,
    dimensions,
    weight,
    manufacturer,
    brand,
    selingPrice,
    costPrice,
    description,
    openingStock,
    reorderPoint,
    preferedVendor
  } = req.body;

  if (
    (!itemName||!unit||!dimensions||!weight||!manufacturer||!brand||!selingPrice||!costPrice||!description||
    !openingStock||!reorderPoint||!preferedVendor)
  ) {
    res.status(400);
    throw new Error("Please Fill all the fields");
  } else {
    const postItem = new Item({
      itemName,
      unit,
      dimensions,
      weight,
      manufacturer,
      brand,
      selingPrice,
      costPrice,
      description,
      openingStock,
      reorderPoint,
      preferedVendor,
    });

    const createdItem = await postItem.save();

    res.status(201).json(createdItem);
  }
});
module.exports = {
  getItem,
  createItem,
//   getCourceByID,
//   updateCource,
//   deleteCource,
};