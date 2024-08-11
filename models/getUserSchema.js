import mongoose from "mongoose";

const GetUserSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String
})

const getUser=mongoose.model("getUser",GetUserSchema)

export default getUser