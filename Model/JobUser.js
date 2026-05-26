import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
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
    location: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    resume: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const JobUser = mongoose.model("JobForm", jobSchema);
