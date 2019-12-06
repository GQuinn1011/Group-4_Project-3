const mongoose = require('mongoose')
const moment = require('moment')
const express = require('express')
const bodyParser = require('body-parser')
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('admin-bro-mongoose'))
// express server definition
const app = express()
const cors= require("cors")//middleware to share resources
app.use(cors())
app.use(bodyParser.json())
// Resources definitions
const User = mongoose.model('User', { name: String, email: String, surname: String })
const Admin = mongoose.model('Admin', { name: String, email: String})
//import from models
const db= require("./models")
const Student= db.Student
const Class = db.Class
const Attendance = db.Attendance

// Routes definitions
app.get('/', (req, res) => res.send('Hello World!'))
// Route which returns last 100 users from the database
app.get('/users', async (req, res) => {
  const users = await User.find({}).limit(10)
  res.send(users)
})
// Route which creates new user
app.post('/users', async (req, res) => {
  const user = await new User(req.body.user).save()
  res.send(user)
})
// Route to see All Students in Students Collection
app.get('/all', async (req, res) => {
  const students = await Student.find({}).limit(10)
  res.send(students)
})
// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  rootPath: '/admin',
  logoutPath: '/admin/exit',
  loginPath: '/admin/sign-in', 
  resources: [{resource: Student, options: {listProperties: ['contactinfo.firstname', 'contactinfo.lastname', 'contactinfo.email', 'status.active', 'rank.belt' ]}}, Admin, Attendance, Class],
  branding: {
    companyName: 'Group 4',
    softwareBrothers: false
  },
})
// app.get("/all", function (req, res) {
//   // From Student model, find every student in db
//   Student.find({})
//     .then(function (dbStudent) {
//       res.json(dbStudent);
//     })
//     .catch(function (err) {
//       res.json(err);
//     });
// });

//Route to See All in Class Collection  
//add 'require' at top of document
app.get("/class", function (req, res) {
  // From Class model, find every class in db
  Class.find({})
    .then(function (dbClass) {
      res.json(dbClass);
    })
    .catch(function (err) {
      res.json(err);
    });
});

//Route to See All in Attendance Collection  
app.get("/attendance", function (req, res) {
  // From Class model, find every class in db
  Attendance.find({})
    .then(function (dbAttendance) {
      res.json(dbAttendance);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.get("/now", function (req, res) {
  // From Class model, the moment.js magic
  Class.find({})
    .then(function (dbClass) {
      //console.log(dbClass)
      for(let i=0; i<dbClass.length; i++){
        //console.log(dbClass[i].title)
        //console.log(moment())
        //console.log(moment(dbClass[i].starttime,"h:mm a"))//.subtract(15, "m"))
        //console.log(moment(dbClass[i].endtime,"h:mm a"))//.add(15, "m"))
        if(moment().isBetween(moment(dbClass[i].starttime, "h:mm a").subtract(15, "m"), moment(dbClass[i].endtime, "h:mm a").add(15, "m"))){
          console.log("its happening")
          if(dbClass[i].days.includes(moment().format("dddd"))){
            console.log("today")
            res.json({title:dbClass[i].title})
            break
          }
        }
        res.json("nothing yet")
      }
    })
    .catch(function (err) {
      res.json(err);
    });
});

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

// Running the server
mongoose.Promise = Promise;
const run = async () => {
  const mongooseDb = await mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/project3',
  { useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log('DB Connection Error:');
    });

  await app.listen(8080, () => console.log(`Example app listening on port 8080!`))
}
//add 'require' at top of document


 // Passing resources by giving entire database

// 
run()

//Create a Student 
//copy STUDENT from datafordatabase.md file

//Create a Class
// copy CLASS from datafordatabase.md file


//Have a Student Attend a Class
//run AFTER you have added STUDENTS and CLASSES 
// db.Attendance.create({
// // Use Student ID
//   studentID: "5de6740b88ea0c2760b914e1",
// // Use Class ID
//   classID: "5de7eefb59d35e1de0e10633",
// }).then((data)=>{
//   console.log( data)
//   //Update Student with Class Attended - Using Student's Email 
//   db.Student.findOneAndUpdate({
//     'contactinfo.email': "student2@mail.com"
//   }, 
//   {$push: {'classes.attended': data._id }}).then( (err2,data2)=>console.log("2", err2, data2))
//   //Update Class with Student Attended - Use Class ID 
//   db.Class.findOneAndUpdate({
//     _id: "5de7eefb59d35e1de0e10633"
//   },
//   {$push: {'attendance': data._id }}).then( (err3,data3)=>console.log("3", err3, data3))
//   })


// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
