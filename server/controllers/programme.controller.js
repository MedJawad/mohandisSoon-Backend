const Programme = require("../model/programme.model.js");

// Create and Save a new Programme
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Programme
  const programme = new Programme({
    name: req.body.name,
    description: req.body.description,
    active: true,
    filiere_id: req.body.filiere_id,
  });

  // Save Programme in the database
  Programme.create(programme, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Programme.",
      });
    else res.send(data);
  });
};

// Retrieve all Programmes from the database.
exports.findAll = (req, res) => {
  Programme.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving programmes.",
      });
    else res.send(data);
  });
};

// Find a single Programme with a programme_id
exports.findOne = (req, res) => {
  Programme.findById(req.params.programme_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Programme with id ${req.params.programme_id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Programme with id " + req.params.programme_id,
        });
      }
    } else res.send(data);
  });
};

//Find Programme by FiliereID
exports.findByFiliere = (req, res) => {
  Programme.findByFiliere(req.params.filiere_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Programme with filiere_id ${req.params.filiere_id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Programme with filiere_id " +
            req.params.filiere_id,
        });
      }
    } else res.send(data);
  });
};

// Update a Programme identified by the programme_id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Programme.updateById(
    req.params.programme_id,
    new Programme(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Programme with id ${req.params.programme_id}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Programme with id " + req.params.programme_id,
          });
        }
      } else res.send(data);
    }
  );
};
// Delete a Programme with the specified programme_id in the request
exports.delete = (req, res) => {
  Programme.remove(req.params.programme_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Programme with id ${req.params.programme_id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Could not delete Programme with id " + req.params.programme_id,
        });
      }
    } else res.send({ message: `Programme was deleted successfully!` });
  });
};
// Delete all Programmes from the database.
exports.deleteAll = (req, res) => {
  Programme.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all programmes.",
      });
    else res.send({ message: `All Programmes were deleted successfully!` });
  });
};
