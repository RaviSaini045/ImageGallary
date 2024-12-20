import express from "express";
import { deleteImage, fetchImages, uploadImage } from "../controllers/image.controller";
import upload from "../middleware/multer.middleware";

const router =  express.Router();

router.route("/fetchImages").get(fetchImages);
router.route("/deleteImage").delete(deleteImage);
router.route("/uploadImage").post(upload.single("image"),uploadImage);

export default router;