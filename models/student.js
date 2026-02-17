const mongoose = require("mongoose");
const abc = require("./abc.js");

const studentSchema = mongoose.Schema({
    name: String,
    city: String,
    age: Number,
    email: String,
    contact: String,
    fatherName: String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"abc",
    }
});

const Student = mongoose.model("Student",studentSchema);
module.exports = Student;