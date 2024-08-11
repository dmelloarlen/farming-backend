import express from "express"
import approved from "../models/approvedScheams.js";


const router=express.Router()

router.post("/setapproved",async(req,res)=>{
    try {
        const {userId,scheamId,fname,age,contact,email,tel,larea,plotNo,panNo,incom,commo,address,scheam,date,photo}=req.body;
        const createScheam=new approved({
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

router.get("/approvedapp/:_id",async(req,res)=>{
    try {
        const id=req.params._id;
        const application=await approved.find({userId:id})
        res.json(application)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})
router.get("/approvedapp",async(req,res)=>{
    try {
        const application=await approved.find()
        res.json(application)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})

export default router