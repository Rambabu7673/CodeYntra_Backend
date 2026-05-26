import { JobUser } from "../Model/JobUser.js";

export const userForm = async (req, res) => {
  const { name, email, phoneNumber, location, message, userId } = req.body;
  try {
    if (!name || !email || !phoneNumber || !location) {
      return res
        .status(401)
        .json({ message: "All field are required", success: false });
    }
    if (!req.file) {
      return res
        .status(402)
        .json({ message: "Image field are requirerd", success: false });
    }
    const resume = `uploads/${req.file.filename}`;
    const newJobForm = await JobUser.create({
      userId,
      name,
      email,
      phoneNumber,
      message,
      location,
      resume,
    });
    return res.status(201).json({
      message: "Your Form has been Submited",
      newJobForm,
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
