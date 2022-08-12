import { IProduct, IProductInfo } from "./../interface/IModel";
import { DummyProductModel as Model } from "../data/models";
import ProductModel, { DummyProductModel } from "../model/ProductModel";

export function SaveDummyProduct(info: any) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new DummyProductModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetDummyProducts() {
  return new Promise(function (resolve, reject) {
    try {
      DummyProductModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AddProduct(info: IProduct) {
  return new Promise(function (resolve, reject) {
    try {
      const Info = new ProductModel(info);
      Info.save();
      resolve(Info);
    } catch (error) {
      reject(error);
    }
  });
}

export function GetProducts() {
  return new Promise(function (resolve, reject) {
    try {
      ProductModel.find((error, results) => {
        error && reject(error);
        resolve(results);
      });
    } catch (error) {
      reject(error);
    }
  });
}
