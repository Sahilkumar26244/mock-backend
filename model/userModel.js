const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name:String,
        difficulty:String,
        score:{
            type:Number,
            default:0
        }
    }
)

const User = mongoose.model("users",userSchema);

module.exports = User;
