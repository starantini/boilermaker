const Sequelize = require("sequelize");
// const User = require("./models/User");

const db = new Sequelize("postgres://localhost:5432/boilerdb", {
  logging: false, // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db;

// process.env.DATABASE_URL ||
