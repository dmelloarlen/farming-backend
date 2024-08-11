import express from "express"
import Scheam from "../models/scheamSchema.js";


const router=express.Router()

router.post("/addscheam",async(req,res)=>{
    try {
        const {title,description,date}=req.body;
        const scheam=await Scheam.findOne({title})
        if(scheam){
            return res.status(400).json({message:"Scheam with same title is already present"});
        }
        const createScheam=new Scheam({
            title:title,
            description:description,
            date:date
        });
        await createScheam.save()
        res.status(201).json({message:"created successfully!!!!!!!!!"});
    } catch (error) {
       console.log("error"+error.message)
       res.status(500).json({message:"internal error"});
    }
})

export default router