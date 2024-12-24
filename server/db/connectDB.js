
import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";


const connectDB = async () => {
    try{
        const connectedInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`DB connected ${connectedInstance.connection.host}`);
    }
    catch (error){
       console.log("Error in connection DB", error.message);
       process.exit(1);
    }
};

export default connectDB;