const Filiere = require("../model/filiere.model.js");

// Create and Save a new Filiere
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Filiere
  const filiere = new Filiere({
    description: req.body.description,
    name: req.body.name,
    pictureUrl: req.body.pictureUrl,
    active: true,
  });

  // Save Filiere in the database
  Filiere.create(filiere, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Filiere.",
      });
    else res.send(data);
  });
};

// Retrieve all Filieres from the database.
exports.findAll = (req, res) => {
  Filiere.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving filieres.",
      });
    else res.send(data);
  });
};

// Find a single Filiere with a filiereId
exports.findOne = (req, res) => {
  Filiere.findById(req.params.filiereId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Filiere with id ${req.params.filiereId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Filiere with id " + req.params.filiereId,
        });
      }
    } else res.send(data);
  });
};

// Update a Filiere identified by the filiereId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Filiere.updateById(
    req.params.filiereId,
    new Filiere(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Filiere with id ${req.params.filiereId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Filiere with id " + req.params.filiereId,
          });
        }
      } else res.send(data);
    }
  );
};
// Delete a Filiere with the specified filiereId in the request
exports.delete = (req, res) => {
  Filiere.remove(req.params.filiereId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Filiere with id ${req.params.filiereId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Filiere with id " + req.params.filiereId,
        });
      }
    } else res.send({ message: `Filiere was deleted successfully!` });
  });
};
// Delete all Filieres from the database.
exports.deleteAll = (req, res) => {
  Filiere.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all filieres.",
      });
    else res.send({ message: `All Filieres were deleted successfully!` });
  });
};
