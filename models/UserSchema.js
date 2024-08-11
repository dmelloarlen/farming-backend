import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true, 
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:String,
        required:true
    },
    profile:{
        type:String
    }
})

const User1=mongoose.model("User1",userSchema);

export default User1;
