import mongoose from "mongoose";
import ProductSchema, { DummyProductSchema } from "../schema/ProductSchema";

export default mongoose.model("product", ProductSchema);

export const DummyProductModel = mongoose.model(
  "dummy_product",
  DummyProductSchema
);
