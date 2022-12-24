const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
    {
    category:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
}
);

const Note = mongoose.model("AllTickets" ,noteSchema );

module.exports = Note;
