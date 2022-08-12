import { IProductInfo } from "./../../interface/IModel";
import { Request, Response } from "express";
import handleImageUpload from "../../functions/handleImageUpload";
import { AddProduct } from "../../services/ProductServices";
import HandleErrors from "../../utilities/HandleErrors";

export default async function (req: Request, res: Response) {
  try {
    console.log("here we are");
    let data: IProductInfo = req.body;
    const resources: string[] = [];
    for (let i = 0; i < data.images.length; i++) {
      const content = `data:image/png;base64,${data.images[i]}`;
      const response = await handleImageUpload(content);
      resources.push(response.url);
    }
    data.images = resources;
    await AddProduct(data);
    res.send("Product uploaded successfully");
  } catch (error) {
    console.log("errr occured");
    console.log(error);
    HandleErrors(res);
  }
}
