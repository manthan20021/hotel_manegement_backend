const express = require("express");
const router = express.Router();
const manu = require("../models/manu");

//route to create a new manu item
router.post("/manu", async (req, res) => {
  try {
    let body = req.body;
    let response = new manu(body);
    await response.save();
  } catch (error) {
    res.status(500).json({
      massage: "internal server error",
      error: error,
    });
  }
});

//route to get all manu items
router.get("/manu", async (req, res) => {
  try {
    let data = await manu.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      massage: "internal server error",
      error: error,
    });
  }
});

//route to get manu items by test type
router.get("/manu/:test", async (req, res) => {
  try {
    let testType = req.params.test;
    if (testType == "spisy" || testType == "sweet" || testType == "swrey") {
      let manuWtithtest = await manu.find({ test: testType });
      res.json(manuWtithtest);
    } else {
      res.status(404).send("not found");
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error,
    });
    console.log(error);
  }
});

//route to update manu item by id
router.put("/manu/:id", async (req, res) => {
  try {
    let userId = req.params.id;

    let updatedDataByid = req.body;
    await manu.findByIdAndUpdate(userId, updatedDataByid, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error,
    });
    console.log(error);
  }
});

//route to delete manu item by id
router.delete("/manu/:id", async (req, res) => {
  try {
    let manuId = req.params.id;
    let deleteManuItem = await manu.findByIdAndDelete(manuId);

    if (!deleteManuItem) {
      res.status(404).json({
        message: "Item not found",
      });
    }
    res.status(200).json({
      massage: "Item deleted sucsessfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error.",
    });
    console.log(error);
  }
});

module.exports = router;
