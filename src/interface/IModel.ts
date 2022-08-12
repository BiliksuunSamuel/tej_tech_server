export interface ICategory {
  title: string;
  id: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  title: string;
  id: string;
}

export interface IProduct {
  name: string;
  category: string;
  subCategory: string;
  description: ProductDescriptionModel[];
  about: string;
  regularPrice: number;
  sellingPrice: number;
  likes: string[];
  reviews: ProductReviewModel[];
  rating: ProductRatingModel[];
  images: string[];
  seller: string;
  status: number;
}
export default interface ProductDescriptionModel {
  id: string;
  label: string;
  value: string;
}

export default interface SubCategoryModel {
  title: string;
  id: string;
}

export interface ProductRatingModel {
  userId: string;
  value: number;
}

export interface ProductReviewModel {
  userId: string;
  message: string;
}

export interface IProductInfo extends IProduct {
  _id: string;
}

export interface IPerson {
  name: string;
  email: string;
  phone: string;
  role: number;
  status: number;
}

export interface IUserInfo extends IPerson {
  _id: string;
}

export interface IUserData extends IPerson {
  password: string;
}

export interface IAuthInfo {
  password: string;
  userId: string;
}

export interface IAuth extends IAuthInfo {
  _id: string;
}
