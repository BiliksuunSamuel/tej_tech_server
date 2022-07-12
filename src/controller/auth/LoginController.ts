import { Request, Response } from "express";
import { IUser } from "../../interface/IModel";
import { GetAuthById } from "../../services/AuthServices";
import { GetUserByEmail } from "../../services/UserServices";
import HandleErrors from "../../utilities/HandleErrors";
import { verifyPassword } from "../../utilities/HandlePassword";

export default async function (req: Request, res: Response) {
  try {
    const data: { email: string; password: string } = req.body;
    const emailUser = <IUser>await GetUserByEmail(data.email);
    if (emailUser) {
      const authInfo = <{ _id: string; password: string }>(
        await GetAuthById(emailUser.authId)
      );
      if (authInfo) {
        const match = verifyPassword(data.password, authInfo.password);
        if (match) {
          res.send(emailUser);
        } else {
          HandleErrors(res, "Incorrect Password");
        }
      } else {
        HandleErrors(res, "Access Denied");
      }
    } else {
      HandleErrors(res, "Invalid Email Address");
    }
  } catch (error) {
    console.log(error);
    HandleErrors(res);
  }
}
