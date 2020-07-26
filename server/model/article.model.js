const sql = require("./db.js");

// constructor
const Article = function (article) {
  this.title = article.title;
  this.description = article.description;
  this.url = article.url;
  this.active = article.active;
};

Article.create = (newArticle, result) => {
  sql.query("INSERT INTO articles SET ?", newArticle, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    result(null, { id: res.insertId, ...newArticle });
  });
};

Article.findById = (articleId, result) => {
  sql.query(`SELECT * FROM articles WHERE id = ${articleId}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Article with the id
    result({ kind: "not_found" }, null);
  });
};

Article.getAll = (result) => {
  sql.query("SELECT * FROM articles", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Article.updateById = (id, article, result) => {
  sql.query(
    "UPDATE articles SET description = ?, title = ?, url = ?, active = ? WHERE id = ?",
    [article.description, article.title, article.url, article.active, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Article with the id
        result({ kind: "not_found" }, null);
        return;
      }

      result(null, { id: id, ...article });
    }
  );
};

Article.remove = (id, result) => {
  sql.query("DELETE FROM articles WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Article with the id
      result({ kind: "not_found" }, null);
      return;
    }

    result(null, res);
  });
};

Article.removeAll = (result) => {
  sql.query("DELETE FROM articles", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Article;
