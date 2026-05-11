import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    details : {
         type: String,
        required: true
    },
    time : {
        type: Date,
        default: Date.now
    },
    completed : {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const todoModel = mongoose.model("Todo", TodoSchema)

export default todoModel;