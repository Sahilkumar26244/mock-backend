const asyncHandler = require("express-async-handler");
const Jobs = require("../models/jobModel");

const getJobs = asyncHandler(async (req,res) => {
    let {
        page = 1,
        limit = 10,
        sortBy = "id",
        order = "asc",
      } = req.query;
      try {
        
        const list = await Jobs.find().skip((page - 1) * limit).limit(limit).sort({ [sortBy]: order === "asc" ? 1 : -1 });
       
       const count = await Jobs.find().count();
       // console.log(count)
       res.status(200).send({ data: list, totalPages: Math.ceil(count / limit)});
     } catch (err) {
       res.status(500).send(err);
    }
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