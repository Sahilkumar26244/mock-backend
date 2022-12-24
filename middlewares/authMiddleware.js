const dotenv=require("dotenv").config()
const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    // console.log(req.headers);

    const token = req.headers?.authorization.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.body.userId = decoded.userId;
        // console.log(decoded)
        next()
    }
    catch(err){
        console.log(err)
        res.status(403).send("Please login again")
    }
}


module.exports={authentication}