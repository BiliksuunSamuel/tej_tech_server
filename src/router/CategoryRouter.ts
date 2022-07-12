import express from "express";
import {
  AddCategoryControlller,
  GetCategoriesController,
} from "../controller/category";
import { GetRoutes, PostRoutes } from "../routes";

const router = express.Router();

///post request
router.post(PostRoutes.categoryAdd, AddCategoryControlller);

///get request;
router.get(GetRoutes.categoriesGet, GetCategoriesController);
export default router;
