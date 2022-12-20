const express = require("express");
const { getWords, createWords, createUser, editUser, getAllUsers, getScore } = require("../controller/controller");

const router = express.Router();

router.route('/allwords/get').get(getWords);
router.route('/allwords').post(createWords);

router.route('/createUser').post(createUser);
router.route('/getAllUsers').get(getAllUsers);
router.route('/getScore/:name').get(getScore);
router.route('/edit/:name/:score').patch(editUser);

module.exports = router;