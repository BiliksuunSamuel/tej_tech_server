import mongoose from "mongoose";

export default new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  status: Number,
  role: Number,
});
