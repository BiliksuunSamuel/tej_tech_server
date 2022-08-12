import moment from "moment";
import { INewUserInfo } from "./../params/index";

export function formatUserInfo(info: INewUserInfo) {
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
