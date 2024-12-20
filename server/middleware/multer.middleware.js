import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk"; 
// jo jo file frontend se aayegi unko backend me kha aur kis name se save krna hai

AWS.Config.upload({
    accessKeyId:process.env.ACCESS_KEY_ID,
    secretAccessKey:SECRECT_ACCESS_KEY
});

const s3 = new AWS.S3();
const galleryBucket = process.env.BUCKET_NAME;

const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:galleryBucket,
        act : "public-read",
        contentType : multerS3.AUTO_CONTENT_TYPE,
        key:function(req,res,cb)
        {
            cb(null,file.originalName);
        }
    })
});

export default upload;
