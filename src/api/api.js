const express = require("express");
let router = require("express").Router();
const controller = require("../controller/controller");

// router.get("/", (req, res) => {
//   res.send("Dilvery API v1");
// });
router.post("/newWarehouse", controller.addNewWarehouse);
router.get("/", controller.getAllwarehouses);
router.get("/:id", controller.getwarehouseByID);
router.put("/updateWarehouse/:id", controller.updatewarehouse);
router.delete("/deleteWarehouse/:id", controller.deletewarehouse);

module.exports = router;
