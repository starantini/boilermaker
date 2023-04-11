const router = require("express").Router();
const { User } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// router.post("/login", async (req, res, next) => {
//   try {
//     res.send({ token: await User.authenticate(req.body) });
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/signup", async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.send({ token: await user.generateToken() });
//   } catch (err) {
//     if (err.name === "SequelizeUniqueConstraintError") {
//       res.status(401).send("User already exists");
//     } else {
//       next(err);
//     }
//   }
// });

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
