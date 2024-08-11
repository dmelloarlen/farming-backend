import express from "express"
import ApplicationSchema from "../models/ApplicationsSchema.js";


const router=express.Router()


router.get("/applied/:_id",async(req,res)=>{
    try {
        const id=req.params._id;
        const application=await ApplicationSchema.find({userId:id})
        res.json(application)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})
router.get("/allapplications",async(req,res)=>{
    try {
        const id=req.params._id;
        const application=await ApplicationSchema.find()
        res.json(application)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})

router.get("/myapplication/:_id",async(req,res)=>{
    try {
        const id=req.params._id;
        const application=await ApplicationSchema.find({_id:id})
        res.json(application)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})

router.delete("/myapplication/:_id",async(req,res)=>{
    try {
        const id=req.params._id;
        const application=await ApplicationSchema.findByIdAndDelete({_id:id})
        res.json(application)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})

export default router