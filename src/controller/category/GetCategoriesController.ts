import { Request, Response } from "express";
import { getCategories } from "../../services/CategoriesServices";
import HandleErrors from "../../utilities/HandleErrors";

export default async function (req: Request, res: Response) {
  try {
    res.send(await getCategories());
  } catch (error) {
    console.log(error);
    HandleErrors(res);
  }
}
