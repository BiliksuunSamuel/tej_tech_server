import UserModel from "../model/UserModel";

export function GetUserById(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      UserModel.findOne({ _id: id }, (error, results) => {
        error && reject(error);
        resolve(resolve);
      });
    } catch (error) {
      reject(error);
    }
  });
}
export function GetUserByPhone(phone: string) {
  return new Promise(function (resolve, reject) {
    try {
      UserModel.findOne({ phone }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
export function GetUserByEmail(email: string) {
  return new Promise(function (resolve, reject) {
    try {
      UserModel.findOne({ email }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddUser(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const User = new UserModel(info);
      User.save();
      resolve(User);
    } catch (error) {
      reject(error);
    }
  });
}
