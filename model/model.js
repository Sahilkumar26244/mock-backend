const mongoose = require("mongoose");

const randomSchema = mongoose.Schema(
    {
        word:String
    }
)

const Words = mongoose.model("AllWords",randomSchema);

module.exports = Words;