require("dotenv").config();
const User = require("../db/models/User");
const router = require("express").Router();

const requireToken = async (req, res, next) => {
  console.log(req.user);

  try {
    //req.headers.authorization is the key
    const token = req.headers.authorization;
    console.log(token);
    //calls byToken function in db.js
    const user = await User.findByToken(token);
    //sets the value of req.user to users
    req.user = user;
    console.log(req.user);
    next();
  } catch (ex) {
    next(ex);
  }
};

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    //req.body that has username and password and passes
    //that info into into the User.authenticate function in db.js
    res.send({ token: await User.authenticate(req.body) });
  } catch (ex) {
    next(ex);
  }
});

router.get("/", requireToken, async (req, res, next) => {
  console.log(req.user);
  res.send(req.user);
});
module.exports = router;
