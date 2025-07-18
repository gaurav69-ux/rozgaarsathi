import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import cookiesParser from "cookie-parser";

app.use(
  cors({
    origin: process.env.orgin,
    credentials: true,
  })
);
app.use(
  json({
    limit: "16kb",
  })
);
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(cookiesParser());

import userRoute from "./routes/user.route.js";
app.use("/api/v1/users", userRoute);

export default app;
