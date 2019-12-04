const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//want to see Student first and last name
//want to see Class name too
const AttendanceSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId, 
        required: true
    },
    classID:{
        type: Schema.Types.ObjectId, 
        required: true
    }

})
const Attendance = mongoose.model('Attendance', AttendanceSchema);

//export
module.exports = Attendance;