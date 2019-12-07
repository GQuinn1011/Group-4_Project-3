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
      listProperties: ['contactinfo.firstname', 'contactinfo.lastname', 'contactinfo.email', 'status.active', 'rank.belt' ]
    },
    properties: {
        dateoflastpromotion:{ 
          type: 'date',
      
        }
    }
  }, Attendance, Class],
  branding: {
    logo: 'https://banner2.cleanpng.com/20180422/tkw/kisspng-brazilian-jiu-jitsu-grappling-logo-martial-arts-gr-jujitsu-5adc2994104124.6748904515243780040666.jpg',
    companyName: 'Group 4',
    softwareBrothers: false,
    theme,
  },
})

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
    module.exports = router