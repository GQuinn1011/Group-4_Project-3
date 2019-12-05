const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = mongoose.Schema({
    administrator: {  
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar_url: { type: String },
    bio: { type: String },
  
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
  }});
    

//collection 'student' made from StudentSchema
const Administrator = mongoose.model('Administrator', AdminSchema);

//export
module.exports = Administrator;

