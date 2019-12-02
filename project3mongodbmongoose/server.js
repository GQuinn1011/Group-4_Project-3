const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db= require("./models")
const Student = require('./models/student');
const Class = require('./models/class');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // This is for production use only
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.use(routes);

//Route to See All in Students Collection  
//add 'require' at top of document
app.get("/all", function(req, res) {
  // From Student model, find every student in db
 Student.find({})
    .then(function(dbStudent) {
      res.json(dbStudent);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//Route to See All in Class Collection  
//add 'require' at top of document
app.get("/class", function(req, res) {
  // From Class model, find every class in db
 Class.find({})
    .then(function(dbClass) {
      res.json(dbClass);
    })
    .catch(function(err) {
      res.json(err);
    });
});


mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/project3',
  { useNewUrlParser: true }
);

//Create a Student 
// db.Student.create({
//   contactinfo: {
//     firstname: "Student FN 1",
//     lastname: "Student LN 1",
//     phonenumber: '908-763-1844',
//     email: "student1@mail.com",
//   },
//   payment: {
//     cash: true,
//     payduealert: true
//   },
//   merch: {
//     merchalert: true
//   },
//   competition: {
//     competitionalert: true
//   },
//   other: {
//     otheralert: true
//   },
//   classes: {
//     gi: 20,
//     nogi: 15,
//     kickboxing: 10
//   },
//   rank: {
//     belt: "white",
//     stripes: 1
//   },
//   status: {
//     active: true
//   }
// });

//Create a Class
// db.Class.create({
//   title: "Mon-Tue-Fri 5pm-6pm Gi Class"
// })

//Have a Student Attend a Class
// db.Attendance.create({
// // Use Student ID
//   studentID: "5de532e71282712cd468e2ce",
// // Use Class ID
//   classID: "5de534c14bc8742e1ce9c7a6",
// }).then((data)=>{
//   console.log( data)
//   //Update Student with Class Attended - Using Student's Email 
//   db.Student.findOneAndUpdate({
//     'contactinfo.email': "student1@mail.com"
//   }, 
//   {$push: {'classes.attended': data._id }}).then( (err2,data2)=>console.log("2", err2, data2))
//   //Update Class with Student Attended - Use Class ID 
//   db.Class.findOneAndUpdate({
//     _id: "5de534c14bc8742e1ce9c7a6"
//   },
//   {$push: {'attendance': data._id }}).then( (err3,data3)=>console.log("3", err3, data3))
//   })


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
