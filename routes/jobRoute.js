import express from 'express'
import { userForm } from '../Controllers/jobUser.js';
import { upload } from '../middleware/uploads.js';

const router = express.Router();

router.post("/job", upload.single("resume"),userForm);

export default router