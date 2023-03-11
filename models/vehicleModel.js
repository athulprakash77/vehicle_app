const Mongoose=require("mongoose")


let vSchema=Mongoose.Schema(
    {
        vehicleNo:String,
        ownerName:String,
        phoneNo:String,
        emailid:String,
        pincode:String
    }
)


module.exports=Mongoose.model("vehicles",vSchema)