const express = require("express");
const { getNotes, createNote, DeleteNote } = require("../controller/noteController");


const router = express.Router();

router.route('/getNotes').get(getNotes);
router.route("/create").post(createNote);
router.route('/:id').delete(DeleteNote);


module.exports = router;
