import { Problem } from "../Model/Problem.js";

export const problemForm = async (req, res) => {
  const { name, email, phoneNumber, problem, userId } = req.body;
  try {
    if (!name || !email || !phoneNumber || !problem) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const data = await Problem.create({
      userId,
      name,
      email,
      phoneNumber,
      problem,
    });
    res
      .status(201)
      .json({ message: "Your Form has been Submited✅", data, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
