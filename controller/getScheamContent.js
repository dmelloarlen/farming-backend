import express from "express"
import Scheam from "../models/scheamSchema.js"


const router=express.Router()

router.get("/schem/:_id",async(req,res)=>{
        try {
            const id=req.params._id;
            const schem=await Scheam.find({_id:id})
            res.json(schem)
        } catch (error) {
            res.status(500).json({message:"internal error"})
        }
})

router.delete("/schem/:_id",async(req,res)=>{
    try {
        const id=req.params._id;
        const schem=await Scheam.findByIdAndDelete({_id:id})
        res.json(schem)
    } catch (error) {
        res.status(500).json({message:"internal error"})
    }
})

export default router