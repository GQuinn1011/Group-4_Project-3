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