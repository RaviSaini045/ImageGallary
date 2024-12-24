
import dotenv from "dotenv";
dotenv.config({path:'./.env'});
import app from "./app.js";
import connectDB from "./db/connectDB.js";
const PORT = process.env.PORT ;
connectDB()
.then(
    app.listen(PORT, ()=> {
        console.log(`Server is live on PORT : ${PORT}`);
    })
)
// .catch(
//  Process already killed in connectDB if db not connected
// )

