import express from "express";
import { getMyProfile, Login, Logout, Register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/authentication.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(Logout);
router.route("/profile/:id").get(isAuthenticated ,getMyProfile);

export default router;