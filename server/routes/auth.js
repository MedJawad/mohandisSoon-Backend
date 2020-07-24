var express = require("express");
var router = express.Router();
const admin = require("../controllers/admin.controller.js");
const {
  adminMiddleware,
  authMiddleware,
} = require("../middleware/auth.middleware.js");

router.post("/login", admin.authenticate);

router.post("/register", authMiddleware, adminMiddleware, admin.register);
router.post("/checkLoadBalance", (req, res) => {
  res.send("LOAD BALANCER:" + process.env.PORT);
});

module.exports = router;
