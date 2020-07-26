var express = require("express");
var router = express.Router();
const articles = require("../controllers/article.controller.js");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/auth.middleware.js");

router.get("/", articles.findAll);

router.get("/:articleId", articles.findOne);

router.post("/", authMiddleware, articles.create);

router.put("/:articleId", authMiddleware, articles.update);

router.delete("/:articleId", authMiddleware, adminMiddleware, articles.delete);

router.delete("/", authMiddleware, adminMiddleware, articles.deleteAll);

module.exports = router;
