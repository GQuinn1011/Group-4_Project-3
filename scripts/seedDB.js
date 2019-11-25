const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

// TODO replace nameSeed to different name

const nameSeed = [
  {
    title: "",
    author: "",
    synopsis: "",
    date: new Date(Date.now())
  },
  {
    title: "",
    author: "",
    synopsis: "",
    date: new Date(Date.now())
  }
];

db.Name
  .remove({})
  .then(() => db.Nook.collection.insertMany(nameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
