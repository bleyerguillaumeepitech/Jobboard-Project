const People = require("../models/people.model.js");

// Create and Save a new People
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a People
  const people = new People({
    name: req.body.name,
    first_name: req.body.first_name,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    postal_code: req.body.postal_code,
    city: req.body.city,
    phone: req.body.phone,
    birth_date: req.body.birth_date,
    cv: req.body.cv,
    website: req.body.website,
    picture: req.body.picture,
    gender: req.body.gender,
    roles: req.body.roles
  });

  // Save People in the database
  People.create(people, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the People."
      });
    else res.send(data);
  });
  
};

// Retrieve all People from the database.
exports.findAll = (req, res) => {
  People.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving people."
      });
    else res.send(data);
  });
  
};

// Find a single People with a peopleId
exports.findOne = (req, res) => {
  People.findById(req.params.peopleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found People with id ${req.params.peopleId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving People with id " + req.params.peopleId
        });
      }
    } else res.send(data);
  });
};

// Update a People identified by the peopleId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  People.updateById(
    req.params.peopleId,
    new People(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found People with id ${req.params.peopleId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating People with id " + req.params.peopleId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a People with the specified peopleId in the request
exports.delete = (req, res) => {
  People.remove(req.params.peopleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found People with id ${req.params.peopleId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete People with id " + req.params.peopleId
        });
      }
    } else res.send({ message: `People was deleted successfully!` });
  });
};

// Delete all People from the database.
exports.deleteAll = (req, res) => {
  People.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all peoples."
      });
    else res.send({ message: `All People were deleted successfully!` });
  });
};