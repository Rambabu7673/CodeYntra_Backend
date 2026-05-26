import { Plan } from "../Model/Plan.js";

export const userPlan = async (req, res) => {
  const { userId, name, phoneNumber, email, planName, planPrice, message } =
    req.body;

  try {
    if (
      !name ||
      !phoneNumber ||
      !email ||
      !planName ||
      !planPrice ||
      !message
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const newPlan = await Plan.create({
      userId,
      name,
      phoneNumber,
      email,
      planName,
      planPrice,
      message,
    });

    return res.status(201).json({
      message: "Plan created successfully",
      newPlan,
    });
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
};
