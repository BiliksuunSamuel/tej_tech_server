import mongoose from "mongoose";

export default new mongoose.Schema({
  name: String,
  category: String,
  subCategory: String,
  sellingPrice: Number,
  regularPrice: Number,
  description: Array,
  rating: Array,
  status: Number,
  seller: String,
  about: String,
  reviews: Array,
  likes: Array,
  images: Array,
});

export const DummyProductSchema = new mongoose.Schema({
  name: String,
  cost: String,
  brand: Boolean,
  rating: Number,
  image: String,
  gallery: Array,
  description: String,
  category: String,
  adjective: String,
});

// name: string;
// category: string;
// subCategory: string;
// description: ProductDescriptionModel[];
// about: string;
// regularPrice: number;
// sellingPrice: number;
// likes: string[];
// reviews: ProductReviewModel[];
// rating: ProductRatingModel[];
// images: string[];
// seller: string;
