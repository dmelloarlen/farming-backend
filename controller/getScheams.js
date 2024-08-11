import express from "express"
import Scheam from "../models/scheamSchema.js"


const router=express.Router()

router.get("/allschems",async(req,res)=>{
        try {
            const allschems=await Scheam.find()
            res.json(allschems)
        } catch (error) {
            res.status(500).json({message:"internal error"})
        }
})

export default router