const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    contactinfo: {
        firstname: String,
        lastname: String,
        phoneNumber: {
            type: String,
            unique: true,
            match: [/^\(?[2-9]\d{2}[-)]?\d{3}-?\d{4}$/, "Please enter a ten-digit phone number"]
   
        },
        email:  {
            type: String,
            unique: true,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
          },
        },
    
    payment: {
        cash: {
            type: Boolean,
            default: false
        },
        directdeposit: {
            type: Boolean,
            default: false
        },
        payduealert: {
            type: Boolean,
            default: false
        }
    },
    merch: {
        merchalert: {
            type: Boolean,
            default: false
        }
    },
    competition: {
        competitionalert: {
            type: Boolean,
            default: false
        }
    },
    other: {
        otheralert: {
            type: Boolean,
            default: false
        }
    },
    classes: {
        attended: [
            {
                type: Schema.Types.ObjectId,
                ref: "Attendance"
              }
        ],
        gi: {
            type: Number,
            default: 0
        },
        nogi: {
            type: Number,
            default: 0
        },
        kickboxing: {
            type: Number,
            default: 0
        }
    },
    rank: {
        belt: {
            type: String,
            default: "white"
        },
        stripes: {
            type: Number,
            default: 0
        },
        dateoflastpromotion: {
            type: Date,
            default: Date.now
        },
    },
    status: {
        active: {
            type: Boolean,
            default: false
        }
    }
});

//collection 'student' made from StudentSchema
const Student = mongoose.model('Student', StudentSchema);

//export
module.exports = Student;

