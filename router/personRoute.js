const express = require("express");
const router = express.Router();
const employ = require("../models/employ");

// Create a new person
router.post("/person", async (req, res) => {
  try {
    let body = req.body;
    let newPerson = new employ(body);
    await newPerson.save();
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
});

// Get all persons
// This route retrieves all persons from the database
router.get("/person", async (req, res) => {
  try {
    let data = await employ.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
});

// Get a person by ID
// This route retrieves a person by their ID from the database
router.get("/person/:work", async (req, res) => {
  try {
    const workType = req.params.work;

    if (workType == "chef" || workType == "weter" || workType == "maneger") {
      let employWitheWork = await employ.find({ work: workType });
      res.status(200).json(employWitheWork);
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

// Update a person by ID
router.put("/person/:id", async (req, res) => {
  try {
    //Extrak the person id
    const personId = req.params.id;

    //extrak updated data by client
    const updatedDataByClient = req.bodybnm;

    //awit and findDatabyIdAndUpdate
    await employ.findByIdAndUpdate(personId, updatedDataByClient, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error,
    });
    console.log(error);
  }
});

// Delete a person by ID
router.delete("/person/:id", async (req, res) => {
  let personId = req.params.id;
  let deletePerson = await employ.findByIdAndDelete(personId);

  if (!deletePerson) {
    res.status(404).json({
      message: "person not found",
    });
  }
  res.status(200).json({
    message: "person deleted sucsessfully",
  });
});

module.exports = router;
