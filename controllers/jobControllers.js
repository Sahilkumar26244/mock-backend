const asyncHandler = require("express-async-handler");
const Jobs = require("../models/jobModel");

const getJobs = asyncHandler(async (req,res) => {
    const jobs = await Jobs.find();
    res.json(jobs)
})

const createJobs = asyncHandler(async (req,res) => {
    const {company,city,location,role,level,contract,position,language} = req.body;

    if(!company || !city || !location || !role || !level || !contract || !position || !language)
    {
        res.status(400)
        throw new Error("Please Fill all the Fields");
    }
    else{
        const job = new Jobs({company,city,location,role,level,contract,position,language});

        const createJob = await job.save();

        res.status(201).json(createJob)
    }
})

module.exports = {getJobs,createJobs};