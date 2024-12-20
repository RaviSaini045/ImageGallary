import { message } from "antd";
import Gallery from "../schemas/image.schema";

export const fetchImages = async (req,res) => {
    try{
        const galleryImages = await Gallery.find();
        return res.status(200).json({statusCode:200, data:galleryImages,message:"images fetched sucessfully",sucess:true});
    }
    catch(error){
        console.error("error in fetching images", error.message);
        return res.status(501).json({statusCode : 501,data : {},message : "error while fetching the images", sucess:false});
    }
};

export const deleteImage = async (req,res) => {
    try{
        const {id} = req.params;
        await Gallery.findByIdAndDelete(id);
        return res.status(200).json({statusCode:200,data:{},message:"Image delete Sucessfully",sucess:true});
    }
    catch(error){
        console.error("error in deleting image", error.message);
        return res.status(501).json({statusCode : 501,data : {},message : "error while deleting the image", sucess:false}); 
    }
};

export const uploadImage = async (req,res) => {
    try{
        const {title} = req.body;
        // when we are uploading the imgae at Amazon s3 bucket  || uploading from pixabay API
        const imageURL = req.file.location || req.body.imageURL ;  
        if(title ==null || imageURL == null )
            throw new Error("All fields are required");

        const uploadedImage = await Gallery.create({title:title,imageURL:imageURL});
        if(uploadedImage == null)
        {
            throw new Error("something went wrong while storing image details");
        }

        return res.status(200).json({statusCode:200,data:uploadedImage,message:"Image uploaded Sucessfully",sucess:true});
    }
    catch(error)
    {
        console.error("error in uploading image", error.message);
        return res.status(501).json({statusCode : 501,data : {},message : "error while uploading the image", sucess:false}); 
    }
};

