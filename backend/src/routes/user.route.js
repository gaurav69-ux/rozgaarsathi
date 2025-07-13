import { Router } from "express";
import { getUserProfile, login, logoutUser, userRegister } from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/signup").post(userRegister);

router.route('/login').post(login);

router.route('/profile').get(verifyJwt, getUserProfile);

router.route('/logout').get(verifyJwt, logoutUser);

export default router;
