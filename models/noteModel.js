const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
);

const Note = mongoose.model("AllNotes",noteSchema);

module.exports = Note;