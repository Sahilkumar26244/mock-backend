const AllWords = require("../model/model")
const User = require("../model/userModel")

const getWords = async(req,res) => {
    const words = await AllWords.find();
    let min = 0 , max = words.length-1

    let index = Math.floor(Math.random() * (max - min + 1) + min)
     
    res.send(words[index])

}

const createWords = async(req,res) => {
    const {word} = req.body;

    const words = new AllWords({word});

        const createword = await words.save();

        res.status(201).json(createword)
}

const getAllUsers = async(req,res) => {
    const users = await User.find();
    res.json(users);

}

const createUser = async(req,res) => {
   const {name,difficulty} = req.body;

   const users = new User({name,difficulty})
   const createUser = await users.save();
   res.json(createUser);

}

const getScore = async(req,res) => {
    const {name} = req.params;

    const user = await User.findOne({name});
    res.json(user.score);

}

const editUser = async(req,res) => {
    const {name,score} = req.params;

    const score1 = await User.findOne({name})
    

    const user = await User.findOneAndUpdate({name:name},{score:Number(score1.score)+Number(score)});

    res.json(user)

}

module.exports = {getWords,createWords , createUser , editUser,getAllUsers , getScore}