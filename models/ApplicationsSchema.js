import mongoose from "mongoose";


const applicationsSchema=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    scheamId:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    tel:{
        type:String
    },
    larea:{
        type:String,
        required:true
    },
    plotNo:{
        type:String,
        required:true
    },
    panNo:{
        type:String,
        required:true
    },
    incom:{
        type:String,
        required:true
    },
    commo:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    scheam:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    photo:{
        type:String
    }
})

const ApplicationSchema=mongoose.model("applications",applicationsSchema)

export default ApplicationSchema