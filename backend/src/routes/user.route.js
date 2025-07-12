import { Router } from "express";
import { login, userRegister } from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(userRegister);

router.route('/login').post(login);

export default router;
