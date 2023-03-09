import  express  from "express"
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary'
import Post from "../mongodb/models/post.js"

dotenv.config();
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
})
router.route('/').get(async(req,res) => {
    
    try {
        const posts = await Post.find({})
        res.status(200).json({ suceess: true, data:posts })

    } catch (error) {
        res.status(500).json({ suceess: false, data:error })   
    }
})
router.route('/').post( async(req,res) => {
 try {
    const{ name, prompt, photo } = req.body
    const photoUrl = await cloudinary.uploader.upload(photo);
    if(name && prompt && photo){
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
          })
        
         return res.status(201).json({ success: true, data: newPost });
    }
   return res.status(500).json({success:false, message:'no prompt'})
    
 } catch (error) {
    console.log(error)
    res.status(500).json({success:false, message:'something went wrong uploading the image'})
 }
})

export default router;