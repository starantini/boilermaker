const { db } = require("./server/db/index");

const User = require("./server/db/models/User");

const users = [
  {
    username: "user1@email",
    password: "helloworld1",
  },
  {
    username: "user2@email",
    password: "helloworld2",
  },
  {
    username: "user3@email",
    password: "helloworld3",
  },
];

const seed = async () => {
  try {
    //force: true should not be used when you have a live site
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    console.log("Seeding succeeded");
    db.close();
  } catch (err) {
    console.error("Failed seeding operation");
    console.error(err);
    db.close();
  }
};

seed();
