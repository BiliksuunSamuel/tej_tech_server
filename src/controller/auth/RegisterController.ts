import { Request, Response } from "express";
import { IUserData } from "../../interface/IModel";
import { AddAuthInfo } from "../../services/AuthServices";
import {
  AddUser,
  GetUserByEmail,
  GetUserByPhone,
} from "../../services/UserServices";
import HandleErrors from "../../utilities/HandleErrors";
import { hashPassword } from "../../utilities/HandlePassword";

export default async function (req: Request, res: Response) {
  try {
    const data = <IUserData>req.body;
    const phoneUser = await GetUserByPhone(data.phone);
    if (phoneUser) {
      HandleErrors(res, "Phone Number Already Registered");
    } else {
      const emailUser = await GetUserByEmail(data.email);
      if (emailUser) {
        HandleErrors(res, "Email Address Already Registered");
      } else {
        const Info: any = await AddUser(data);
        await AddAuthInfo({
          password: await hashPassword(data.password),
          userId: Info._id,
        });
        res.send("Account Created Successfully");
      }
    }
  } catch (error) {
    console.log(error);
    HandleErrors(res);
  }
}
