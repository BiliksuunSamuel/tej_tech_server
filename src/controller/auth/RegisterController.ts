import { Request, Response } from "express";
import { INewUserInfo } from "../../params";
import { AddAuthInfo } from "../../services/AuthServices";
import {
  AddUser,
  GetUserByEmail,
  GetUserByPhone,
} from "../../services/UserServices";
import { formatUserInfo } from "../../utilities";
import HandleErrors from "../../utilities/HandleErrors";
import { hashPassword } from "../../utilities/HandlePassword";

export default async function (req: Request, res: Response) {
  try {
    const data = <INewUserInfo>req.body;
    const phoneUser = await GetUserByPhone(data.phone);
    if (phoneUser) {
      HandleErrors(res, "Phone Number Already Registered");
    } else {
      const emailUser = await GetUserByEmail(data.email);
      if (emailUser) {
        HandleErrors(res, "Email Address Already Registered");
      } else {
        const authInfo: any = await AddAuthInfo({
          password: await hashPassword(data.password),
        });
        const userInfo = formatUserInfo(data);
        userInfo.authId = authInfo?._id;
        const Info = await AddUser(userInfo);
        console.log(Info);
        res.send("Account Created Successfully");
      }
    }
  } catch (error) {
    console.log(error);
    HandleErrors(res);
  }
}
