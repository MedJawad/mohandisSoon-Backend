var jwt = require("jsonwebtoken");

exports.authMiddleware = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user.data;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

exports.adminMiddleware = function (req, res, next) {
  console.log(req.user);
  if (req.user && req.user.type == "admin") {
    next();
  } else {
    res.sendStatus(401);
  }
};
