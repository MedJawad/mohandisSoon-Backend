var express = require("express");
var router = express.Router();
const modules = require("../controllers/module.controller.js");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/auth.middleware.js");

router.get("/", modules.findAll);

router.get("/filiere/:filiere_id", modules.findByFiliere);

router.get("/:moduleId", modules.findOne);

router.post("/", authMiddleware, modules.create);

router.put("/:moduleId", authMiddleware, modules.update);

router.delete("/:moduleId", authMiddleware, adminMiddleware, modules.delete);

router.delete("/", authMiddleware, adminMiddleware, modules.deleteAll);

module.exports = router;
