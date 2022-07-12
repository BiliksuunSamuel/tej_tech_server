export interface IUser {
  name: string;
  phone: string;
  email: string;
  authId: string;
  status: Number;
  role: number;
  address: string;
  profileImage: string;
  followers: string[];
  dateAdded: string;
}

export interface ICategory {
  title: string;
  id: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  title: string;
  id: string;
}
