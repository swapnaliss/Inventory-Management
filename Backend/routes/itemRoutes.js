const express = require("express");
const {
  getItem,
   createItem,
//   getCourceByID,
//   updateCource,
//   deleteCource,
} = require("../controller/itemController");

const router = express.Router();

router.route("/items").get(getItem);

router.route("/create").post(createItem);
// router.route("/:id").get(getCourceByID).put(updateCource).delete(deleteCource);

module.exports = router;
