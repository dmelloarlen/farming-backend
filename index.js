import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import multer from "multer";
import { fileURLToPath } from 'url';

// Import your route modules
import userRout from "./controller/userRout.js";
import addScheamRout from "./controller/addScheamRout.js";
import getScheams from "./controller/getScheams.js";
import getScheamContent from "./controller/getScheamContent.js";
import getUser from "./controller/getUser.js";
import applicationsRout from "./controller/applicationsRout.js";
import getApplications from "./controller/getApplications.js";
import approvedApplicationsRout from "./controller/approvedApplicationsRout.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

// MongoDB connection
mongoose.connect("mongodb+srv://arlendmello03:arlen1911@ocb-cluster.cnudxss.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=OCB-Cluster")
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running!!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Setting up __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the upload directory exists
const uploadDir = path.join(__dirname, './uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Serving static files from the uploads directory
app.use('/images', express.static(uploadDir));

// Route to handle image uploads
app.post('/upimg', upload.single('image'), async (req, res) => {
  try {
    // Respond with the image URL
    const imageUrl = `https://farming-backend-ldnp.onrender.com/${req.file.filename}`;
    // console.log(imageUrl)
    res.json({ image_url: imageUrl });
  } catch (error) {
    // Handle any errors that occur during the upload
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Using your imported routes
app.use("/User1", userRout);
app.use("/User1", getUser);
app.use("/Scheam", addScheamRout);
app.use("/Scheam", getScheams);
app.use("/Scheam", getScheamContent);
app.use("/Applications", upload.single("image"), applicationsRout);
app.use("/Applications", getApplications);
app.use("/approved", approvedApplicationsRout);
