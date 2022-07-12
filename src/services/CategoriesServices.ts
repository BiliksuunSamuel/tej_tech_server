import CategoryModel from "../model/CategoryModel";

export function getCategories() {
  return new Promise(function (resolve, reject) {
    try {
      CategoryModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function addCategory(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new CategoryModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function getCategoryByTitle(title: string) {
  return new Promise(function (resolve, reject) {
    try {
      CategoryModel.findOne({ title }, (error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
