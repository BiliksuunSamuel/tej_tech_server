import mongoose from "mongoose";

export default new mongoose.Schema({
  password: String,
  userId: String,
});
