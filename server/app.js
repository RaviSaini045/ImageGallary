import express from "express";
import cors from "cors";
import router from "./routes/image.routes";

const app = express();

app.use(express.urlencoded());

app.use(express.json());

app.use(express.static("public"));

app.use(
    cors({
         origin:process.env.ORIGIN_URL
        }
    )
);

app.use("/api/images",router);

export default app;