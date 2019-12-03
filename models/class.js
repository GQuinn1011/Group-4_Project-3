const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
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