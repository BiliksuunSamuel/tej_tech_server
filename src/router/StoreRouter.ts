import { PostRoutes } from "./../routes/index";

import express from "express";
import { ProductUploadController } from "../controller/store";

const router = express.Router();

router.post(PostRoutes.productUpload, ProductUploadController);
export default router;
