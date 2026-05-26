import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";
import userRoute from "./routes/userRoute.js";
import contactRoute from "./routes/contactRoute.js";
import planRoute from "./routes/planRoute.js";
import jobRoute from "./routes/jobRoute.js"
import problemRoute from "./routes/problemRoutes.js"

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use("/user/api", userRoute);
app.use("/contact/api", contactRoute);
app.use('/plan/user', planRoute)
app.use('/user/form', jobRoute)
app.use('/user/api', problemRoute)

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Server is runing on your browser" });
});
// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is runing on port ${port}`));

// MongoDB connected
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "CODYNTRA",
  })
  .then(() => console.log("MongoDB is connect Successfully...!"))
  .catch((err) => console.log(err));
