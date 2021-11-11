const Applied = require("../models/applied.model.js");

// Create and Save a new People
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a People
  const applied = new Applied({
    advertisement_id: req.body.advertisement_id,
    people_id: req.body.people_id,
    motivation_people: req.body.motivation_people,
  });

  // Save People in the database
  Applied.create(applied, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the People."
      });
    else res.send(data);
  });
  
};

exports.findByIdPeople = (req, res) => {
  Applied.findByIdPeople(req.params.people_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found People with id ${req.params.people_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving People with id " + req.params.people_id
        });
      }
    } else res.send(data);
  });
};

// Retrieve all People from the database.
exports.findAll = (req, res) => {
    Applied.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving people."
      });
    else res.send(data);
  });
  
};


