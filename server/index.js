// The following is in the `start.js` file

// say our sequelize instance is create in 'db.js'
const db = require("./db/db");
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require("./app");
const port = process.env.PORT || 3000;

db.sync() // sync our database
  .then(function () {
    app.listen(port); // then start listening with our express server once we have synced
  });
