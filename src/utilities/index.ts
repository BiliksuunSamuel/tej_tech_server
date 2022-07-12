import moment from "moment";
import { IUser } from "./../interface/IModel";
import { INewUserInfo } from "./../params/index";

export function formatUserInfo(info: INewUserInfo): IUser {
  return {
    ...info,
    followers: [],
    profileImage: "",
    dateAdded: moment().format(),
    authId: "",
    role: 0,
    status: 1,
    address: "",
  };
}
