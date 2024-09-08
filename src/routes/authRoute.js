import { Router } from "express";
import {loginUser } from "../controllers/authController.js"
const authRouter = Router();

authRouter.post("/login", loginUser);

export default authRouter;
