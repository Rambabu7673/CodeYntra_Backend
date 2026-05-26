import { Contact } from "../Model/Contact.js";

export const userContact = async (req, res) => {
  const { name, email, subject, phoneNumber, message,userId } = req.body;

  console.log(req.body);

  try {
    // Validation
    if (!name || !email || !subject || !phoneNumber || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Create Contact
    const newContact = await Contact.create({
      userId,
      name,
      email,
      subject,
      phoneNumber,
      message,
    });

    return res.status(201).json({
      message: "Message sent successfully",
      newContact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
