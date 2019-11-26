const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    contactinfo: {
    firstname: String,
    lastname: String,
    phonenumber: String,
    email: String
    },
    payment: {
        cash: false,
        directdeposit: false,
        payduealert: false
    },
    merch: {
        merchalert: false
    },
    competition: {
        competitionalert: false
    },
    other: {
        otheralert: false
    },
    classes: {
        gi: Number,
        nogi: Number,
        kickboxing: Number
    },
    rank: {
        belt: String,
        stripes: String,
        dateoflastpromotion: Date
    },
    status: {
        active: false
    }
});

//collection 'student' made from StudentSchema
const Student = mongoose.model('student', StudentSchema);

//export
module.exports = Student;