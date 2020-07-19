var express = require("express");
var router = express.Router();
const programmes = require("../controllers/programme.controller.js");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/auth.middleware.js");

router.get("/", programmes.findAll);

router.get("/filiere/:filiere_id", programmes.findByFiliere);

router.get("/:programme_id", programmes.findOne);

router.post("/", authMiddleware, programmes.create);

router.put("/:programme_id", authMiddleware, programmes.update);

router.delete(
  "/:programme_id",
  authMiddleware,
  adminMiddleware,
  programmes.delete
);

router.delete("/", authMiddleware, adminMiddleware, programmes.deleteAll);

module.exports = router;
