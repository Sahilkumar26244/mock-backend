const express = require("express");
const { getJobs, createJobs } = require("../controllers/jobControllers");


const router = express.Router();


router.route('/getJobs').get(getJobs);
router.route('/createJobs').post(createJobs);

module.exports = router;
