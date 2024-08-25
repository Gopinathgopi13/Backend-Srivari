import { Router } from "express";
import authController from "../controllers/authController.js";
// import passport from "../utils/passportjsUtils.js";

const authRouter = Router();

// User Login
authRouter.post("/login", authController.login);
// authRouter.post("/signup", authController.signUp);

// authRouter.get("/logout", authController.logout);

// authRouter.get("/refresh-token", authController.refreshToken);

// authRouter.put("/change-password/:user_id", authController.changePassword);

// User registration
// authRouter.post("/register", authController.createUser);

// if user forgot password
// authRouter.post("/forgot-password", authController.forgot);

// To reset passwords
// authRouter.post("/reset-Password", authController.resetPassword);

// Routing for verify mail account
// authRouter.get("/verify-email", authController.verifyMail);

// Google Authentication
// authRouter.get("/google", (req, res, next) => {
//   const state = JSON.stringify(req.query);
//   console.log(state);
//   passport.authenticate("google", {
//     scope: ["profile", "email"],
//     state,
//   })(req, res, next);
// });

// authRouter.get(
//   "/google/callback",
//   passport.authenticate("google"),
//   authController.google
// );

// Github Authentication
// authRouter.get("/github", (req, res, next) => {
//   const state = JSON.stringify(req.query);
//   passport.authenticate("github", { scope: ["user:email"], state })(
//     req,
//     res,
//     next
//   );
// });

// authRouter.get(
//   "/github/callback",
//   passport.authenticate("github"),
//   authController.github
// );

// Microsoft Authentication
// authRouter.get("/microsoft", (req, res, next) => {
//   const state = JSON.stringify(req.query);
//   passport.authenticate("microsoft", {
//     prompt: "select_account",
//     state,
//   })(req, res, next);
// });

// authRouter.get(
//   "/microsoft/callback",
//   passport.authenticate("microsoft"),
//   authController.microsoft
// );

// Linkedin Authentication
// authRouter.get("/linkedin", (req, res, next) => {
//   const state = JSON.stringify(req.query);
//   passport.authenticate("linkedin", {
//     state,
//   })(req, res, next);
// });
// authRouter.get(
//   "/linkedin/callback",
//   passport.authenticate("linkedin"),
//   authController.linkedin
// );

export default authRouter;
