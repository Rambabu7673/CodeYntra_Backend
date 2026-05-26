import mongoose from "mongoose";

const ContectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});
export const Contact = mongoose.model("Contact", ContectSchema);
