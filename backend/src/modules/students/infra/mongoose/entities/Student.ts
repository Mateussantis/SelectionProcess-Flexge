import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    school: String
});

const Student = mongoose.model('Student', schema);

export { Student };