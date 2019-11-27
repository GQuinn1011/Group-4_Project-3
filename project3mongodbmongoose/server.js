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

//Create a Student 
// db.Student.create({contactinfo: {
//   firstname: "Renita",
//   lastname: "Cuccia",
//   phonenumber: '723-555-4567',
//   email: "ren@mail.com"
//   }})

//Create a Class
// db.Class.create({
//   title: "test"
// })

//Have a Student Attend a Class
// db.Attendance.create({
//   studentID: "5ddec33438fbd51924a1060f",
//   classID: "5ddec9859c7eba30987ae5c5"
// })

//Update Student with Class Attended
//NEEDS WORK! 
db.Student.findOneAndUpdate({
  'contactinfo.email': "ren@mail.com"
}, 
{$push: {'classes.attended': "5ddeca3287fea5345035817b" }}).then( (err,data)=>console.log(err, data))




app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
