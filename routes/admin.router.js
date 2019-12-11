// We have to tell AdminBro that we will manage mongoose resources with it
const db= require("../models")
const Student= db.Student
const Class = db.Class
const Attendance = db.Attendance
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
const mongoose = require('mongoose')
const AdminBroMongoose = require('admin-bro-mongoose')
const theme = require('admin-bro-theme-dark')
AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath:'/admin',
  resources: [{
    resource: Student, 
    options: {
      parent:{
        name: 'Studio',
        icon: 'far fa-hand-rock',
      },
      listProperties: ['contactinfo.firstname', 'contactinfo.lastname', 'contacctinfo.email', 'status.active', 'rank.belt' ]
    },
    properties: {
        dateoflastpromotion:{ 
          type: 'date'
        }
    }
  }, {resource: Attendance,
    options: {
      parent: {
        name: 'Studio',
        icon: 'far fa-hand-rock',
      }
    }
  }, 
    {resource: Class,
      options: {
        parent: {
          name: 'Studio',
          icon: 'far fa-hand-rock',
        },
        listProperties: [
          'title', 'type', 'days', 'starttime', 'endtime'
        ]
      }}],
  branding: {
    logo: 'http://radjibarrettjiujitsu.com/static/media/rbjj-white.f25bae17.png',
    companyName: 'Project Time Capture',
    softwareBrothers: false,
    theme,
  },
})

  // const ADMIN = {
  //   email: process.env.ADMIN_EMAIL || 'admin@example.com',
  //   password: process.env.ADMIN_PASSWORD || 'lovejs',
  // }
  const router = AdminBroExpressjs.buildRouter(adminBro)
//{
    // cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    // cookiePassword: process.env.ADMIN_COOKIE_PASS || 'some-secret-password-used-to-secure-cookie', 
    // authenticate: async (email, password) => {
    //   if (email == ADMIN.email && password == ADMIN.password) {
    //     return ADMIN
    //   }
    //   return null
    // }})
    module.exports = router