const db = require("./db");
const User = require("./models/User");

// Campus.hasMany(Student);
// Student.belongsTo(Campus);

module.exports = {
  User,
  db,
};
