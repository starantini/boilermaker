const router = require("express").Router();

router.use("/users", require("./user")); // matches all requests to /api/users/

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
