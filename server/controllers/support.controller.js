const Support = require("../model/support.model.js");

// Create and Save a new Support
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Support
  const support = new Support({
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    url: req.body.url,
    urlContentType: req.body.urlContentType,
    active: true,
    module_id: req.body.module_id,
  });

  // Save Support in the database
  Support.create(support, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Support.",
      });
    else res.send(data);
  });
};

// Retrieve all Supports from the database.
exports.findAll = (req, res) => {
  Support.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving supports.",
      });
    else res.send(data);
  });
};

// Find a single Support with a id
exports.findOne = (req, res) => {
  Support.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Support with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Support with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

//Find Module by ProgrammeID
exports.findByModule = (req, res) => {
  Support.findByModule(req.params.module_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Support with module_id ${req.params.module_id}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving Support with module_id " + req.params.module_id,
        });
      }
    } else res.send(data);
  });
};

// Update a Support identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Support.updateById(req.params.id, new Support(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Support with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Support with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
// Delete a Support with the specified id in the request
exports.delete = (req, res) => {
  Support.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Support with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Support with id " + req.params.id,
        });
      }
    } else res.send({ message: `Support was deleted successfully!` });
  });
};
// Delete all Supports from the database.
exports.deleteAll = (req, res) => {
  Support.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all supports.",
      });
    else res.send({ message: `All Supports were deleted successfully!` });
  });
};
