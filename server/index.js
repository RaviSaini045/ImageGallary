
import dotenv from "dotenv";
dotenv.config({path:'./.env'});
import app from "./app";
import connectDB from "./db/connectDB";
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

