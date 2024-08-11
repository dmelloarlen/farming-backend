import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

import userRout from "../farming-backend/controller/userRout.js"
import addScheamRout from "../farming-backend/controller/addScheamRout.js"
import getScheams from "../farming-backend/controller/getScheams.js"
import getScheamContent from "../farming-backend/controller/getScheamContent.js"
import getUser from "../farming-backend/controller/getUser.js"
import applicationsRout from "../farming-backend/controller/applicationsRout.js"
import getApplications from "../farming-backend/controller/getApplications.js"
import approvedApplicationsRout from "../farming-backend/controller/approvedApplicationsRout.js"

import multer from "multer";

const app=express();

app.use(express.json());
app.use(cors());
dotenv.config()

// const port=process.env.PORT || 4001;
// const MONGO_URI=process.env.URI

// console.log(process.env.PORT)

mongoose.connect("mongodb+srv://arlendmello03:arlen1911@ocb-cluster.cnudxss.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=OCB-Cluster")
.then(()=>{
    app.listen(4000,()=>{
        console.log("Server is running!!")
    })
})
.catch((err)=>{
    console.log(err)
})

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../farming-schemes/src/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

  app.post("/upimg", upload.single("image"), async (req, res) => {
    res.json({fname:req.file});
  });
  

app.use("/User1",userRout)
app.use("/User1",getUser)
app.use("/Scheam",addScheamRout)
app.use("/Scheam",getScheams)
app.use("/Scheam",getScheamContent)
app.use("/Applications",upload.single("image"),applicationsRout)
app.use("/Applications",getApplications)
app.use("/approved",approvedApplicationsRout)

