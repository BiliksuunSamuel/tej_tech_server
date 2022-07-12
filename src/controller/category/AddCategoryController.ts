import { Request, Response } from "express";
import {
  addCategory,
  getCategories,
  getCategoryByTitle,
} from "../../services/CategoriesServices";
import HandleErrors from "../../utilities/HandleErrors";

export default async function (req: Request, res: Response) {
  try {
    const data = req.body;
    const Info = await getCategoryByTitle(data?.title);
    if (Info) {
      HandleErrors(res, "Category Title Already Exist");
    } else {
      await addCategory(data);
      res.send({
        message: "Category Added Successfully",
        data: await getCategories(),
      });
    }
  } catch (error) {
    console.log(error);
    HandleErrors(res);
  }
}
