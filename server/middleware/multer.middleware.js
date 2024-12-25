import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRECT_ACCESS_KEY,
  },
});

const galleryBucket = process.env.BUCKET_NAME;

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: galleryBucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

// Middleware to bypass multer if imageURL is present
const conditionalUpload = (req, res, next) => {
  if (req.body.imageURL) {
    // Skip multer processing if imageURL is provided
    return next();
  }
  return upload.single("image")(req, res, next); // Use multer to handle file upload
};

export default conditionalUpload;
