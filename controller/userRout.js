import User1 from "../models/UserSchema.js";
import bcryptjs from "bcryptjs"
import express from "express"


const router=express.Router()

router.post("/signup",async(req,res)=>{
    try {
        const {name,phone,email,password,isadmin}=req.body;
        const user=await User1.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists!"});
        }
        const hashPass=await bcryptjs.hash(password,10);
        const createUser=new User1({
            name:name,
            phone:phone,
            email:email,
            password:hashPass,
            isadmin:isadmin
        });
        await createUser.save()
        res.status(201).json({message:"created successfully!!!!!!!!!",user});
    } catch (error) {
       console.log("error"+error.message)
       res.status(500).json({message:"internal error"});
    }
})

var id
router.post("/login",async(req,res)=>{

    try {
        const {email,password}=req.body;
        // console.log(email)
        const user=await User1.findOne({email});
        const match=await bcryptjs.compare(password,user.password)
        if(!user || !match){
            return res.status(400).json({message:"Invalid email or password!!!!!!!!!"});
        }else{
            id=user._id;
            res.status(200).json({message:"Login successful",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                isadmin:user.isadmin
            },
        });            
    }   
    } catch (error) {
       res.status(500).json({message:"internal error"});

    }
})

export  default router