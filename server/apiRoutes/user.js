const router = require("express").Router();
const { User } = require("../db");

// matches GET requests to /api/puppies/
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// matches POST requests to /api/puppies/
// router.post("/", function (req, res, next) {
//   /* etc */
// });

// // matches PUT requests to /api/puppies/:puppyId
// router.put("/:userId", function (req, res, next) {
//   /* etc */
// });

// // matches DELETE requests to /api/puppies/:puppyId
// router.delete("/:userId", function (req, res, next) {
//   /* etc */
// });

module.exports = router;
