import mongoose from "mongoose";
import AuthSchema from "../schema/AuthSchema";

export default mongoose.model("auth", AuthSchema);
