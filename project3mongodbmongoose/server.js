const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db= require("./models")

const app = express();
const PORT = process.env.PORT || 3001;

const Student = require('./models/student')

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // This is for production use only
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.use(routes);


mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/project3',
  { useNewUrlParser: true }
);

db.Student.create({contactinfo: {
  firstname: "Michael",
  lastname: "Cuccia",
  phonenumber: 5551234567,
  email: "michael@mail.com"
  }})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
