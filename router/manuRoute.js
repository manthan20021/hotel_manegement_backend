const express = require("express");
const router = express.Router();
const manu = require("../models/manu");

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
