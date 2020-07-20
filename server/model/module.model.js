const sql = require("./db.js");

// constructor
const Module = function (module) {
  this.name = module.name;
  this.description = module.description;
  this.charge_horaire = module.charge_horaire;
  this.annee = module.annee;
  this.active = module.active;
  this.filiere_id = module.filiere_id;
};

Module.create = (newModule, result) => {
  sql.query("INSERT INTO modules SET ?", newModule, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newModule });
  });
};

Module.findById = (moduleId, result) => {
  sql.query(`SELECT * FROM modules WHERE id = ${moduleId}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Module with the id
    result({ kind: "not_found" }, null);
  });
};

Module.findByFiliere = (filiereId, result) => {
  sql.query(
    `SELECT * FROM modules WHERE filiere_id = ${filiereId}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      // not found Module with the id
      result({ kind: "not_found" }, null);
    }
  );
};
Module.getAll = (result) => {
  sql.query("SELECT * FROM modules", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Module.updateById = (id, module, result) => {
  sql.query(
    "UPDATE modules SET description = ?, name = ?, charge_horaire = ?, annee = ?, active = ?, filiere_id = ? WHERE id = ?",
    [
      module.description,
      module.name,
      module.charge_horaire,
      module.annee,
      module.active,
      module.filiere_id,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Module with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...module });
    }
  );
};

Module.remove = (id, result) => {
  sql.query("DELETE FROM modules WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Module with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

Module.removeAll = (result) => {
  sql.query("DELETE FROM modules", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Module;
