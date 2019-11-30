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

//Route to See All in Students Collection  
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


mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/project3',
  { useNewUrlParser: true }
);

// //Create a Student 
// db.Student.create({contactinfo: {
//   firstname: "Test1firstname",
//   lastname: "Test1lastname",
//   phonenumber: '555-555-0001',
//   email: "Test1email@mail.com"
//   }})

// //Create a Class
// db.Class.create({
//   title: "Test1classtitle"
// })

//Have a Student Attend a Class
db.Attendance.create({
// Test1firstname
  studentID: "5de2a3bca5cd75344cefd057",
// Test1classtitle
  classID: "5de2a3bca5cd75344cefd058"
}).then((data)=>{
  console.log( data)
  //Update Student with Class Attended
  db.Student.findOneAndUpdate({
    'contactinfo.email': "Test1email@mail.com"
  }, 
  {$push: {'classes.attended': data._id }}).then( (err2,data2)=>console.log("2",err2, data2))
  //Update Class with Student Attended
  db.Class.findOneAndUpdate({
    _id: "5de2a3bca5cd75344cefd058"
  },
  {$push: {'attendance': data._id }}).then( (err3,data3)=>console.log("3",err3, data3))
  })


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
