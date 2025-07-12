import { Router } from "express";
import { userRegister } from "../controllers/user.controller.js";

const router = Router();

router.route("/signup").post(userRegister);
export default router;
