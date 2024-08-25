import express from "express";
import config from "./config/config.js";
import authRouter from "./routes/authRoute.js";
// import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("site is working");
});

app.use("/api/auth", authRouter);

app.listen(config.port, () =>
  console.log(`Server running in port: ${config.port}`)
);
