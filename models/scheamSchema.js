import mongoose from "mongoose";

const scheamsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String
    }
})

const Scheam=mongoose.model("Scheam",scheamsSchema);

export default Scheam;