const mongoose = require("mongoose");
const student = mongoose.Schema({
    studentName:String,
    studentAge:Number,
});

const studentModel = mongoose.model("student",student);
module.exports = studentModel;
