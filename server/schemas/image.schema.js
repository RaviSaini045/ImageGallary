

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    imageURL : {
        type : String,
        required : true
    }
});

const Gallery = mongoose.model("Gallery",imageSchema);
export default Gallery;