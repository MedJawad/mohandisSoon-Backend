const Module = require("../model/module.model.js");

// Create and Save a new Module
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Module
  const module = new Module({
    description: req.body.description,
    name: req.body.name,
    charge_horaire: req.body.charge_horaire,
    active: req.body.active || true,
    filiere_id: req.body.filiere_id,
  });

  // Save Module in the database
  Module.create(module, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Module.",
      });
    else res.send(data);
  });
};

// Retrieve all Modules from the database.
exports.findAll = (req, res) => {
  Module.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving modules.",
      });
    else res.send(data);
  });
};

// Find a single Module with a id
exports.findOne = (req, res) => {
  Module.findById(req.params.moduleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Module with id ${req.params.moduleId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Module with id " + req.params.moduleId,
        });
      }
    } else res.send(data);
  });
};

//Find Module by filiereID
exports.findByFiliere = (req, res) => {
  Module.findByFiliere(req.params.filiere_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Module with filiere_id ${req.params.filiere_id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Module with filiere_id " + req.params.filiere_id,
        });
      }
    } else res.send(data);
  });
};

// //Find Module by filiereID
// exports.findByAnnee = (req, res) => {
//   Module.findByAnnee(req.params.semestre, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Module with filiere_id ${req.params.filiere_id}.`,
//         });
//       } else {
//         res.status(500).send({
//           message:
//             "Error retrieving Module with filiere_id " + req.params.filiere_id,
//         });
//       }
//     } else res.send(data);
//   });
// };

// Update a Module identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Module.updateById(req.params.moduleId, new Module(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Module with id ${req.params.moduleId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Module with id " + req.params.moduleId,
        });
      }
    } else res.send(data);
  });
};
// Delete a Module with the specified id in the request
exports.delete = (req, res) => {
  Module.remove(req.params.moduleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Module with id ${req.params.moduleId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Module with id " + req.params.moduleId,
        });
      }
    } else res.send({ message: `Module was deleted successfully!` });
  });
};
// Delete all Modules from the database.
exports.deleteAll = (req, res) => {
  Module.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all modules.",
      });
    else res.send({ message: `All Modules were deleted successfully!` });
  });
};
