const mongoose = require('mongoose')
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
const Administrator = db.Administrator

// Routes definitions
app.get('/', (req, res) => res.send('Hello World!'))
// Route which returns last 100 users from the database
app.get('/users', async (req, res) => {
  const users = await User.find({}).limit(10)
  res.send(users)
})
app.get('/student/:id', function(req, res) {
  db.Student.findOne({ _id: req.params.id })
      .populate("Attendance")
      .then(function(dbStudent) {
          res.render("Attendance", { contactinfo: dbStudent });
      })
      .catch(function(err) {
          res.json(err);
      });
});
// Route which creates new user
app.post('/users', async (req, res) => {
  const user = await new User(req.body.user).save()
  res.send(user)
})
app.get('/all', async (req, res) => {
  const students = await Student.find({}).limit(10)
  res.send(students)
})
// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [User, Student, Admin, Attendance, Class],
  rootPath: '/admin',
  loginPath: '/xyz-admin/sign-in',
  logoutPath: '/xyz-admin/exit',
  branding: {
    companyName: 'MAD-Q Inc.',
  }
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

  await app.listen(8080, () => console.log(`Admin app listening on port 8080/admin!`))
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
//   studentID: "5de68470a6a548384fbf7136",
// // Use Class ID
//   classID: "5de7f7411143264d7863025d",
// }).then((data)=>{
//   console.log( data)
//   //Update Student with Class Attended - Using Student's Email 
//   db.Student.findOneAndUpdate({
//     'contactinfo.email': "student1@mail.com"
//   }, 
//   {$push: {'classes.attended': data._id.title }}).then( (err2,data2)=>console.log("2", err2, data2))
//   //Update Class with Student Attended - Use Class ID 
//   db.Class.findOneAndUpdate({
//     _id: "5de7f7411143264d7863025d"
//   },
//   {$push: {'attendance': data._id.title }}).then( (err3,data3)=>console.log("3", err3, data3))
//   })


// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
