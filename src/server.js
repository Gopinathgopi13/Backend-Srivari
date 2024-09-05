import express from "express";
import config from "./config/config.js";
import authRouter from "./routes/authRoute.js";
import manageProductRouter from "./routes/admin/manageProductRoute.js";
// import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  res.send("site is working");
});

app.use("/api/auth", authRouter);
app.use("/api", manageProductRouter);

app.listen(config.port, () =>
  console.log(`Server running in port: ${config.port}`)
);
