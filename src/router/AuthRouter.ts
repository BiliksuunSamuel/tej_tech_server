import express from "express";
import { LoginController, RegisterController } from "../controller/auth";
import { PostRoutes } from "../routes";

const router = express.Router();

router.post(PostRoutes.login, LoginController);
router.post(PostRoutes.register, RegisterController);

export default router;
