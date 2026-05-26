import express from 'express';
import { userContact } from '../Controllers/contact.js';

const router = express.Router();
router.post("/contact", userContact);

export default router;