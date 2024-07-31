import express from 'express';
import validateAuth from '../../config/config-passport.js';
import {
  createBoard,
  getBoardsByUser,
  updateBoard, // Asigură-te că imporți funcția corect
} from '../../controller/boardsController.js';

const router = express.Router();

router.post('/', validateAuth, createBoard);
router.get('/', validateAuth, getBoardsByUser);
router.patch('/:id', validateAuth, updateBoard); // Define the PATCH route

export default router;
