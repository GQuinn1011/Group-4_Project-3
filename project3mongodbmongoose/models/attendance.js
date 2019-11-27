const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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