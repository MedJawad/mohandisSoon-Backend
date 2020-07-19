const sql = require("./db.js");

// constructor
const Programme = function (programme) {
  this.name = programme.name;
  this.description = programme.description;
  this.active = programme.active;
  this.filiere_id = programme.filiere_id;
};

Programme.create = (newProgramme, result) => {
  sql.query("INSERT INTO programmes SET ?", newProgramme, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newProgramme });
  });
};

Programme.findById = (programmeId, result) => {
  sql.query(
    `SELECT * FROM programmes WHERE id = ${programmeId}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      // not found Programme with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Programme.findByFiliere = (filiereId, result) => {
  sql.query(
    `SELECT * FROM programmes WHERE filiere_id = ${filiereId}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      // not found Programme with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Programme.getAll = (result) => {
  sql.query("SELECT * FROM programmes", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Programme.updateById = (id, programme, result) => {
  sql.query(
    "UPDATE programmes SET description = ?, name = ?, active = ? , filiere_id = ? WHERE id = ?",
    [
      programme.description,
      programme.name,
      programme.active,
      programme.filiere_id,
      id,
    ],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Programme with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...programme });
    }
  );
};

Programme.remove = (id, result) => {
  sql.query("DELETE FROM programmes WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Programme with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

Programme.removeAll = (result) => {
  sql.query("DELETE FROM programmes", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Programme;
