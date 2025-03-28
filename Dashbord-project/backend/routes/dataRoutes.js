import express from 'express';
import { createTable, fetchData } from '../controllers/dataController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/table', protect, createTable);
router.get('/google-sheets', fetchData);
export default router;