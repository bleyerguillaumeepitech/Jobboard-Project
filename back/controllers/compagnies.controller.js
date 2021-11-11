const Compagnies = require("../models/compagnies.model.js");

// Create and Save a new Compagnies
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Compagnies
  const compagnies = new Compagnies({
    name: req.body.name,
    address: req.body.address,
    activities: req.body.activities,
    postal_code: req.body.postal_code,
    city: req.body.city,
    siret: req.body.siret,
    password: req.body.password,
    number_employes: req.body.number_employes,
    website: req.body.website,
    phone: req.body.phone,
    email: req.body.email,
    contact_name: req.body.contact_name
  });

  // Save Compagnies in the database
  Compagnies.create(compagnies, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Compagnies."
      });
    else res.send(data);
  });
  
};

// Retrieve all Compagnies from the database.
exports.findAll = (req, res) => {
  Compagnies.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving compagnies."
      });
    else res.send(data);
  });
  
};

// Find a single Compagnies with a compagniesId
exports.findOne = (req, res) => {
  Compagnies.findById(req.params.compagniesId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Compagnies with id ${req.params.compagniesId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Compagnies with id " + req.params.compagniesId
        });
      }
    } else res.send(data);
  });
};

// Update a Compagnies identified by the compagniesId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Compagnies.updateById(
    req.params.compagniesId,
    new Compagnies(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Compagnies with id ${req.params.compagniesId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Compagnies with id " + req.params.compagniesId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Compagnies with the specified compagniesId in the request
exports.delete = (req, res) => {
  Compagnies.remove(req.params.compagniesId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Compagnies with id ${req.params.compagniesId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Compagnies with id " + req.params.compagniesId
        });
      }
    } else res.send({ message: `Compagnies was deleted successfully!` });
  });
};

// Delete all Compagnies from the database.
exports.deleteAll = (req, res) => {
  Compagnies.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all compagniess."
      });
    else res.send({ message: `All Compagnies were deleted successfully!` });
  });
};