import express from 'express';
import validateAuth from '../../config/config-passport.js';
import {
  createBoard,
  getBoardsByUser,
} from '../../controller/boardsController.js';

const router = express.Router();

router.post('/', validateAuth, createBoard);
router.get('/', validateAuth, getBoardsByUser);

export default router;
