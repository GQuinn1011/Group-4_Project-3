const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const db = require("./models")
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
app.get("/all", function (req, res) {
  // From Student model, find every student in db
  Student.find({})
    .then(function (dbStudent) {
      res.json(dbStudent);
    })
    .catch(function (err) {
      res.json(err);
    });
});

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


mongoose.Promise = Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/project3',
  { useNewUrlParser: true }
);

//Create a Student 
//copy STUDENT from datafordatabase.md file

//STUDENT

//student 1
db.Student.create({
  contactinfo: {
    firstname: "Student FN 1",
    lastname: "Student LN 1",
    phonenumber: '908-555-0001',
    email: "student1@mail.com",
  },
  payment: {
    cash: true,
    payduealert: true
  },
  merch: {
    merchalert: true
  },
  competition: {
    competitionalert: true
  },
  other: {
    otheralert: true
  },
  classes: {
    gi: 25,
    nogi: 20,
    kickboxing: 15
  },
  rank: {
    belt: "white",
    stripes: 2
  },
  status: {
    active: true
  }
});

//student 2
db.Student.create({
  contactinfo: {
    firstname: "Student FN 2",
    lastname: "Student LN 2",
    phonenumber: '908-555-0002',
    email: "student2@mail.com",
  },
  payment: {
    cash: true,
    payduealert: true
  },
  merch: {
    merchalert: true
  },
  competition: {
    competitionalert: true
  },
  other: {
    otheralert: true
  },
  classes: {
    gi: 35,
    nogi: 25,
    kickboxing: 15
  },
  rank: {
    belt: "white",
    stripes: 3
  },
  status: {
    active: true
  }
});

//student 3
db.Student.create({
  contactinfo: {
    firstname: "Student FN 3",
    lastname: "Student LN 3",
    phonenumber: '908-555-0003',
    email: "student3@mail.com",
  },
  payment: {
    cash: true,
    payduealert: true
  },
  merch: {
    merchalert: true
  },
  competition: {
    competitionalert: true
  },
  other: {
    otheralert: true
  },
  classes: {
    gi: 55,
    nogi: 30,
    kickboxing: 25
  },
  rank: {
    belt: "white",
    stripes: 3
  },
  status: {
    active: true
  }
});

//student 4
db.Student.create({
  contactinfo: {
    firstname: "Student FN 4",
    lastname: "Student LN 4",
    phonenumber: '908-555-0004',
    email: "student4@mail.com",
  },
  payment: {
    cash: true,
    payduealert: true
  },
  merch: {
    merchalert: true
  },
  competition: {
    competitionalert: true
  },
  other: {
    otheralert: true
  },
  classes: {
    gi: 55,
    nogi: 35,
    kickboxing: 10
  },
  rank: {
    belt: "white",
    stripes: 3
  },
  status: {
    active: true
  }
});

//student 5
db.Student.create({
  contactinfo: {
    firstname: "Student FN 5",
    lastname: "Student LN 5",
    phonenumber: '908-555-0005',
    email: "student5@mail.com",
  },
  payment: {
    cash: true,
    payduealert: true
  },
  merch: {
    merchalert: true
  },
  competition: {
    competitionalert: true
  },
  other: {
    otheralert: true
  },
  classes: {
    gi: 155,
    nogi: 185,
    kickboxing: 65
  },
  rank: {
    belt: "blue",
    stripes: 1
  },
  status: {
    active: true
  }
});

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

//CLASS

//class 1
db.Class.create({
  title: "Mon/Tue/Fri 5pm-6pm Gi Class"
})

//class 2
db.Class.create({
  title: "Mon/Sat 10am-11am Gi Class"
})

//class 3
db.Class.create({
  title: "Thurs 5pm-6pm NoGi Class"
})

//class 4
db.Class.create({
  title: "Tue/Sun 10am-11am NoGi Class"
})

//class 5
db.Class.create({
  title: "Sat/Sun 9am-10am Kickboxing Class"
})

//Create a Class
// copy CLASS from datafordatabase.md file

//Have a Student Attend a Class
//run AFTER you have added STUDENTS and CLASSES 
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
