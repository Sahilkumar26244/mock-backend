const express = require("express");
const { getNotes, createNotes } = require("../controller/noteController");
const { authentication } = require('../middlewares/authMiddleware')

const router = express.Router();

router.route('/').get( authentication, getNotes);
router.route('/create').post(authentication,createNotes)

module.exports = router;
