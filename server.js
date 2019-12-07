const mongoose = require('mongoose')
const moment = require('moment')
const express = require('express')
const bodyParser = require('body-parser')
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
const bcrypt = require('bcrypt')
const session = require('express-session')
// We have to tell AdminBro that we will manage mongoose resources with it
AdminBro.registerAdapter(require('admin-bro-mongoose'))
// express server definition
const app = express()
const cors= require("cors")//middleware to share resources
app.use(cors())
app.use(bodyParser.json())
// Resources definitions
const User = mongoose.model('User', { name: String, email: String, surname: String })
const Admin = mongoose.model('Admin', { name: String, email: {type: String, required: true}, password: {type: String, required: true}})
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

// const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath:'/admin',
  resources: [{
    resource: Student, 
    options: {
      parent:{
        name: 'Studio',
        icon: 'fas-fa-cogs',
      },
      listProperties: ['contactinfo.firstname', 'contactinfo.lastname', 'contactinfo.email', 'status.active', 'rank.belt' ]
    },
    properties: {
        'rank.dateoflastpromotion':{ 
          type: 'richtext',
      
        }
      
    }
  }, Admin, Attendance, Class],
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

app.get("/now", function (req, res) {
  // From Class model, the moment.js magic
  Class.find({})
    .then(function (dbClass) {
      console.log(dbClass)
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
const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@example.com',
  password: process.env.ADMIN_PASSWORD || 'lovejs',
}
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'some-secret-password-used-to-secure-cookie', 
  authenticate: async (email, password) => {
    if (email == ADMIN.email && password == ADMIN.password) {
      return ADMIN
    }
    return null
  }})
  app.use(adminBro.options.rootPath, router)
    // const admin = await Admin.findOne({ email, password })
//     if (admin) {
//       const matched = await bcrypt.compare(password, user.encryptedPassword)
//       if (matched) {
//         return admin
//       }
//     }
//     return false
//   },
  
// })

// router.use((req, res, next) => {
//     if (req.session && req.session.admin) {
//      req.adminUser = req.session.admin
//       next()
//     } else {
//       res.redirect(adminBro.options.loginPath)
//     }
//   })
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
// const Plugin = require('./plugin')
// module.exports = Plugin
//Create a Student 
//copy STUDENT from datafordatabase.md file

//Create a Class
// copy CLASS from datafordatabase.md file
//class 1
// db.Class.create({
//   title: "Mon/Tue/Fri 5pm-6pm Gi Class",
//   starttime: "5:00 pm",
//   endtime: "6:00 pm",
//   type: "gi",
//   days: ["Monday", "Tuesday", "Friday"]
// })

// //class 2
// db.Class.create({
//   title: "Mon/Sat 10am-11am Gi Class",
//   starttime: "10:00 am",
//   endtime: "11:00 am",
//   type: "gi",
//   days: ["Monday", "Saturday"]
// })

// //class 3
// db.Class.create({
//   title: "Thurs 5pm-6pm NoGi Class",
//   starttime: "5:00 pm",
//   endtime: "6:00 pm",
//   type: "nogi",
//   days: "Thursday"
// })

// //class 4
// db.Class.create({
//   title: "Tue/Sun 10am-11am NoGi Class",
//   starttime: "10:00 am",
//   endtime: "11:00 am",
//   type: "nogi",
//   days: ["Tuesday", "Sunday"]
// })

// //class 5
// db.Class.create({
//   title: "Sat/Sun 9am-10am Kickboxing Class",
//   starttime: "9:00 am",
//   endtime: "10:00 am",
//   type: "kickboxing",
//   days: ["Saturday", "Sunday"]
// })


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
