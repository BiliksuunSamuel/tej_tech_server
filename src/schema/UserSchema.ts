import mongoose from "mongoose";

export default new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  authId: String,
  status: Number,
  role: Number,
  address: String,
  profileImage: String,
  followers: Array,
  dateAdded: String,
});
