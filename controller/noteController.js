const asyncHandler = require('express-async-handler');
const Note = require('../model/noteModel');

const getNotes = asyncHandler(async (req,res) => {

    const notes = await Note.find({user:req.user_id})
    res.json(notes);

})

const createNotes = asyncHandler(async(req,res) => {
    const {category,title,message} = req.body;

    if(!category || !title || !message){
        res.status(400);
        throw new Error("Please Fill all the Fields");
    } else {
        const note = new Note({user:req.user_id ,category,title,message})
        const createNote = await note.save();

        res.status(201).json(createNote)
    }
})

module.exports = {getNotes , createNotes};
