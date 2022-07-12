import mongoose from "mongoose";
import UserSchema from "../schema/UserSchema";

export default mongoose.model("user", UserSchema);
