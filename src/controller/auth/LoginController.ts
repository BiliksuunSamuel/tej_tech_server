import { Request, Response } from "express";
import { IAuth, IUserInfo } from "../../interface/IModel";
import { GetAuthById, GetAuthInfoByUserId } from "../../services/AuthServices";
import { GetUserByEmail } from "../../services/UserServices";
import HandleErrors from "../../utilities/HandleErrors";
import { verifyPassword } from "../../utilities/HandlePassword";

export default async function (req: Request, res: Response) {
  try {
    const data: { email: string; password: string } = req.body;
    const emailUser = <IUserInfo>await GetUserByEmail(data.email);
    if (emailUser) {
      const authInfo = <IAuth>await GetAuthInfoByUserId(emailUser._id);
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
