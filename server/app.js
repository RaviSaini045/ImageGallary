import express from "express";
import cors from "cors";
import router from "./routes/image.routes.js";

const app = express();

app.use(express.urlencoded());

app.use(express.json());

app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${process.env.ORIGIN_URL}`);
//   res.header("Access-Control-Allow-Credentials", `true`)
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/images", router);

export default app;
