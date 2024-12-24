import express from "express";
import { deleteImage, fetchImages, searchImages, uploadImage } from "../controllers/image.controller.js";
import conditionalUpload from "../middleware/multer.middleware.js";

const router =  express.Router();

router.route("/fetchImages").get(fetchImages);
router.route("/deleteImage/:id").delete(deleteImage);
router.route("/uploadImage").post(conditionalUpload,uploadImage);
router.route("/searchImages").get(searchImages);
export default router;