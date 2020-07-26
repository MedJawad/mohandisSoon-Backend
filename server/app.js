require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var articlesRouter = require("./routes/articles");
var filieresRouter = require("./routes/filieres");
var modulesRouter = require("./routes/modules");
var supportsRouter = require("./routes/supports");
var authRouter = require("./routes/auth");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/articles", articlesRouter);
app.use("/api/filieres", filieresRouter);
app.use("/api/modules", modulesRouter);
app.use("/api/supports", supportsRouter);
app.use("/api/auth", authRouter);

app.use(function (req, res, next) {
  res.status(200).sendFile(path.join(__dirname, "../build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).send();
});

module.exports = app;
