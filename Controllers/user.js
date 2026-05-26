import { User } from "../Model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// User Register
export const userRegister = async (req, res) => {
  try {
    const { name, phoneNumber, email, password, role } = req.body;

    // Uploaded Image Path
    // Uploaded Image
   const profileImage = req.file ? `uploads/${req.file.filename}` : "";

    console.log(req.file);
    console.log(req.body);


    // Validation
    if (!name || !phoneNumber || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check Existing User
    const existUser = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash Password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = await User.create({
      name,
      phoneNumber,
      email,
      role,
      profileImage,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User registered successfully",

      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        profileImage,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

// User Login
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare Password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
      },

      process.env.SECRET_KEY,

      {
        expiresIn: "14d",
      },
    );

    res.status(200).json({
      message: `Your Page is opnened Welcome🎉 ${user.name}`,

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
