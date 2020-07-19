const Admin = require("../model/admin.model.js");
var jwt = require("jsonwebtoken");

exports.authenticate = function authenticate(req, res) {
  Admin.findByUsernameAndPassword(
    req.body.username,
    req.body.password,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(401).send({ err: "Wrong login or password" });
        } else {
          res.status(500).send({
            message: "Error while trying to authenticate ",
          });
        }
      } else {
        // req.session.isAuthenticated = true;
        // res.redirect("/");
        const token = jwt.sign({ data }, process.env.TOKEN_KEY, {
          expiresIn: 24 * 60 * 60,
        });
        res.status(200).send({ user: data, token });
      }
    }
  );
};

exports.register = function register(req, res) {
  Admin.save(
    req.body.username,
    req.body.password,
    req.body.type || "user",
    (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Error while trying to register ",
        });
      } else {
        res.status(200).send({ user: data });
      }
    }
  );
};
