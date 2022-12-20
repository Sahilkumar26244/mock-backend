const express = require('express');
require('dotenv').config();
const connectDB = require("./config/db");
const cors = require('cors');
const randomRoute = require("./routes/route")

const app = express();

app.use(cors())
app.use(express.json());

connectDB()

app.get('/',(req,res) => {
    res.send("welcome")
})

app.use("/random" , randomRoute);


const PORT = process.env.PORT || 4040
app.listen(PORT , () => {
    console.log("server is running!")
})