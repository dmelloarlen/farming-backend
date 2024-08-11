import express from "express"
import ApplicationSchema from "../models/ApplicationsSchema.js";


const router=express.Router()

router.post("/apply",async(req,res)=>{
    try {
        const {userId,scheamId,fname,age,contact,email,tel,larea,plotNo,panNo,incom,commo,address,scheam,date,photo}=req.body;
        const scheam1=await ApplicationSchema.findOne({fname})
        if(scheam1){
            return res.status(400).json({message:"Scheam with same title is already present"});
        }
        const createScheam=new ApplicationSchema({
            userId:userId,
            scheamId:scheamId,
            fname:fname,
            age:age,
            contact:contact,
            email:email,
            tel:tel,
            larea:larea,
            plotNo:plotNo,
            panNo:panNo,
            incom:incom,
            commo:commo,
            address:address,
            scheam:scheam,
            date:date,
            photo:photo
        });
        await createScheam.save()
        res.status(201).json({message:"created successfully!!!!!!!!!"});
    } catch (error) {
       console.log("error"+error.message)
       res.status(500).json({message:"internal error"});
    }
})

export default router