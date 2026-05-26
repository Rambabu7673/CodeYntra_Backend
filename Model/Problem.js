import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
});

export const Problem = mongoose.model("ProblemData", problemSchema);