const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    starttime: {
        type: String, // 5:00 pm   moment.format("h:mm a")
        required: true
    },
    endtime: {
        type: String, // 5:00 pm   moment.format("h:mm a")
        required: true
    },
    type: {
        type: String, // gi, nogi, kickboxing
        required: true
    },
    days: [
        {type: String} // Sunday moment.format('dddd')
    ],
    attendance:[
        {
                type: Schema.Types.ObjectId, 
                ref: "Attendance"
            }
    ]

})
const Class = mongoose.model('Class', ClassSchema);

//export
module.exports = Class;