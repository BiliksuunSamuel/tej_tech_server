import AuthModel from "../model/AuthModel";

export function GetAuthById(id: string) {
  return new Promise(function (resolve, reject) {
    try {
      AuthModel.findOne({ _id: id }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddAuthInfo(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new AuthModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}
