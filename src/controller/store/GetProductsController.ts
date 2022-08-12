import { Request, Response } from "express";
import { GetProducts } from "../../services/ProductServices";
import HandleErrors from "../../utilities/HandleErrors";

export default async function (_, res: Response) {
  try {
    res.send(await GetProducts());
  } catch (error) {
    console.log(error);
    HandleErrors(res);
  }
}
