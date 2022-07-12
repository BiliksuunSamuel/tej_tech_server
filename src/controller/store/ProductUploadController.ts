import { Request, Response } from "express";
import handleImageUpload from "../../functions/handleImageUpload";
import HandleErrors from "../../utilities/HandleErrors";

export default async function (req: Request, res: Response) {
  try {
    console.log("here we are");
    const data: { image: any } = req.body;
    const response = await handleImageUpload(data.image);
    console.log(response.url);
    res.send("Image uploaded successfully");
  } catch (error) {
    console.log("errr occured");
    HandleErrors(res);
  }
}
