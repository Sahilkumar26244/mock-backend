const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(async (req,res) => {
    const notes = await Note.find()
    res.json(notes)
})

const createNote = asyncHandler(async (req,res) => {
    const {title,quantity,priority,description} = req.body;

    if(!title || !quantity || !priority || !description) {
        res.status(400)
        throw new Error("Please Fill all the Fields");
    }
    else{
        const note = new Note({title,quantity,priority,description});

        const createNote = await note.save();

        res.status(201).json(createNote)
    }
})

const DeleteNote = asyncHandler(async (req,res) => {
    const note = await Note.findById(req.params.id);

    if(note) {
        await note.remove();
        res.json({message:"Note Removed"})
    } else {
        res.status(404);
        throw new Error("Note not found")
    }
})

module.exports = {getNotes,createNote,DeleteNote};
