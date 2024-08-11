import express from "express"
import User1 from "../models/UserSchema.js"


const router=express.Router()

router.get("/getuser/:id",async(req,res)=>{
        try {
            const id=req.params.id
            const getUser=await User1.findOne({_id:id})
            res.json(getUser)
        } catch (error) {
            res.status(500).json({message:"internal error"})
        }
})
router.patch("/getuser/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body; // The data to update
  
      const getUser = await User1.findByIdAndUpdate(id, updateData, { new: true });
      if (!getUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(getUser);
      console.log(getUser);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

export default router