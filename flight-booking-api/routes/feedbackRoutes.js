import express from 'express';
import { submitFeedback, getUserFeedbacks } from '../controllers/feedbackController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router=express.Router();

router.post('/',authMiddleware,submitFeedback);
router.get('/',authMiddleware ,getUserFeedbacks);

export default router;