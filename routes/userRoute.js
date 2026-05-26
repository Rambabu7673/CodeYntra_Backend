import express from 'express';
import { upload } from '../middleware/uploads.js';
import { userRegister, userLogin } from '../Controllers/user.js';


const router = express.Router();

router.post("/register", upload.single("profileImage"), userRegister);
router.post("/login", userLogin)

export default router;