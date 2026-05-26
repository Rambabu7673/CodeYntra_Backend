import express from 'express';
import { userPlan } from '../Controllers/plan.js';

const router = express.Router();
router.post("/plan", userPlan);

export default router;