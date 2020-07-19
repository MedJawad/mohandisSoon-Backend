var express = require("express");
var router = express.Router();
const admin = require("../controllers/admin.controller.js");
const {
  adminMiddleware,
  authMiddleware,
} = require("../middleware/auth.middleware.js");

router.post("/login", admin.authenticate);

router.post("/register", authMiddleware, adminMiddleware, admin.register);

module.exports = router;
