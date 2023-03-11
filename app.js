const Express =require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const vModel=require("./models/vehicleModel")

Mongoose.connect("mongodb+srv://college:college12345@cluster0.nk3uqez.mongodb.net/vehicledb?retryWrites=true&w=majority",{useNewurlParser:true})


var app=Express()
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.send("welcome")
})

app.post("/entry",async(req,res)=>{
    let data=new vModel(req.body)
    console.log(data)
    await data.save()
    res.send("data")
    })
    

    
app.get("/viewall",async(req,res)=>{
    let data=await vModel.find()
    res.send(data)
    })
    

app.listen(3000)