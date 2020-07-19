const sql = require("./db.js");

// constructor
const Filiere = function (filiere) {
  this.description = filiere.description;
  this.name = filiere.name;
  this.pictureUrl = filiere.pictureUrl;
  this.active = filiere.active;
};

Filiere.create = (newFiliere, result) => {
  sql.query("INSERT INTO filieres SET ?", newFiliere, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newFiliere });
  });
};

Filiere.findById = (filiereId, result) => {
  sql.query(`SELECT * FROM filieres WHERE id = ${filiereId}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Filiere with the id
    result({ kind: "not_found" }, null);
  });
};

Filiere.getAll = (result) => {
  sql.query("SELECT * FROM filieres", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Filiere.updateById = (id, filiere, result) => {
  sql.query(
    "UPDATE filieres SET description = ?, name = ?, pictureUrl = ?, active = ? WHERE id = ?",
    [filiere.description, filiere.name, filiere.pictureUrl, filiere.active, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Filiere with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...filiere });
    }
  );
};

Filiere.remove = (id, result) => {
  sql.query("DELETE FROM filieres WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Filiere with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

Filiere.removeAll = (result) => {
  sql.query("DELETE FROM filieres", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Filiere;
