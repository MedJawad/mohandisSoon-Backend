var express = require("express");
var router = express.Router();
const supports = require("../controllers/support.controller.js");
const {
  adminMiddleware,
  authMiddleware,
} = require("../middleware/auth.middleware.js");

router.get("/", supports.findAll);

router.get("/module/:module_id", supports.findByModule);

router.get("/:id", supports.findOne);

router.post("/", authMiddleware, supports.create);

router.put("/:id", authMiddleware, adminMiddleware, supports.update);

router.delete("/:id", authMiddleware, adminMiddleware, supports.delete);

router.delete("/", authMiddleware, adminMiddleware, supports.deleteAll);

module.exports = router;
