import express from "express";
import { problemForm } from "../Controllers/problem.js";

const router = express.Router();

router.post("/problem", problemForm);
export default router;
