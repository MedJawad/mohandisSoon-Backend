var express = require("express");
var router = express.Router();
const filieres = require("../controllers/filiere.controller.js");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/auth.middleware.js");

router.get("/", filieres.findAll);

router.get("/:filiereId", filieres.findOne);

router.post("/", authMiddleware, filieres.create);

router.put("/:filiereId", authMiddleware, filieres.update);

router.delete("/:filiereId", authMiddleware, adminMiddleware, filieres.delete);

router.delete("/", authMiddleware, adminMiddleware, filieres.deleteAll);

module.exports = router;
