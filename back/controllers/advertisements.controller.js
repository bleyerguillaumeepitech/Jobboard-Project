const Advertisements = require("../models/advertisements.model.js");

// Create and Save a new Advertisements
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Advertisements
  const advertisements = new Advertisements({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    published: req.body.published,
    companie_id: req.body.companie_id,
    contrat_type: req.body.contrat_type
  });

  // Save Advertisements in the database
  Advertisements.create(advertisements, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Advertisements."
      });
    else res.send(data);
  });
  
};

// Retrieve all Advertisements from the database.
exports.findAll = (req, res) => {
  Advertisements.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving advertisements."
      });
    else res.send(data);
  });
  
};

// Find a single Advertisements with a advertisementsId
exports.findOne = (req, res) => {
  Advertisements.findById(req.params.advertisementsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Advertisements with id ${req.params.advertisementsId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Advertisements with id " + req.params.advertisementsId
        });
      }
    } else res.send(data);
  });
};

exports.findByIdCompanie = (req, res) => {
  Advertisements.findByIdCompanie(req.params.companieId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Advertisements with id ${req.params.companieId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Advertisements with id " + req.params.companieId
        });
      }
    } else res.send(data);
  });
};



// Update a Advertisements identified by the advertisementsId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Advertisements.updateById(
    req.params.advertisementsId,
    new Advertisements(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Advertisements with id ${req.params.advertisementsId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Advertisements with id " + req.params.advertisementsId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Advertisements with the specified advertisementsId in the request
exports.delete = (req, res) => {
  Advertisements.remove(req.params.advertisementsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Advertisements with id ${req.params.advertisementsId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Advertisements with id " + req.params.advertisementsId
        });
      }
    } else res.send({ message: `Advertisements was deleted successfully!` });
  });
};

// Delete all Advertisements from the database.
exports.deleteAll = (req, res) => {
  Advertisements.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all advertisementss."
      });
    else res.send({ message: `All Advertisements were deleted successfully!` });
  });
};