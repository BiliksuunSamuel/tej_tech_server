import { GetRoutes, PostRoutes } from "./../routes/index";

import express from "express";
import {
  GetProductsController,
  ProductUploadController,
} from "../controller/store";

const router = express.Router();

router.post(PostRoutes.productUpload, ProductUploadController);
router.get(GetRoutes.getProducts, GetProductsController);
export default router;
