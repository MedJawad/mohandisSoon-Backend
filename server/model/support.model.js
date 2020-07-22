const sql = require("./db.js");

// constructor
const Support = function (support) {
  this.name = support.name;
  this.description = support.description;
  this.type = support.type;
  this.url = support.url;
  this.urlContentType = support.urlContentType;
  this.active = support.active;
  this.module_id = support.module_id;
};

Support.create = (newSupport, result) => {
  sql.query("INSERT INTO supports SET ?", newSupport, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newSupport });
  });
};

Support.findById = (supportId, result) => {
  sql.query(`SELECT * FROM supports WHERE id = ${supportId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Support with the id
    result({ kind: "not_found" }, null);
  });
};

Support.findByModule = (moduleId, result) => {
  sql.query(
    `SELECT * FROM supports WHERE module_id = ${moduleId}`,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      // not found Support with the id
      result({ kind: "not_found" }, null);
    }
  );
};
Support.getAll = (result) => {
  sql.query("SELECT * FROM supports", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Support.updateById = (id, support, result) => {
  sql.query(
    "UPDATE supports SET description = ?, name = ?, type = ?, url = ?, urlContentType = ?, active = ?, module_id = ? WHERE id = ?",
    [
      support.description,
      support.name,
      support.type,
      support.url,
      support.urlContentType,
      support.active,
      support.module_id,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Support with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...support });
    }
  );
};

Support.remove = (id, result) => {
  sql.query("DELETE FROM supports WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Support with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

Support.removeAll = (result) => {
  sql.query("DELETE FROM supports", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Support;
