const sql = require("./db.js");

// constructor
const Admin = function (admin) {
  this.username = admin.name;
  this.password = admin.description;
  this.type = admin.type;
};

Admin.findByUsernameAndPassword = (username, password, result) => {
  sql.query(
    "SELECT username,type FROM admins where username = ? and password = UPPER(MD5('" +
      password +
      "'))",
    [username, password],
    (err, res) => {
      if (res && res.length < 1) {
        err = {};
        err.kind = "not_found";
      }
      if (err) {
        result(err, null);
        return;
      }
      result(null, res[0]);
    }
  );
};
Admin.save = (username, password, type, result) => {
  sql.query(
    "INSERT INTO admins (username,password,type) VALUES ( ? , UPPER(MD5(' ? ')), ? )",
    [username, password, type],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};
module.exports = Admin;
