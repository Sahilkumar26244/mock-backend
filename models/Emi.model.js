const mongoose=require("mongoose");

const emiSchema=new mongoose.Schema({
    Loan_amount:{type:Number,required:true},
    Annual_Interest_rate:{type:Number,required:true},
    Tenure_in_months:{type:Number,required:true},
    userId:{type:String}
},{
    timestamps:true
})

const EmiModel=mongoose.model("emi",emiSchema)

module.exports={EmiModel};