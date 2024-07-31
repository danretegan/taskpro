import express from 'express';
import validateAuth from '../../config/config-passport.js';
import {
  createBoard,
  getBoardsByUser,
  updateBoard,
  deleteBoard,  // Adăugați importul pentru funcția deleteBoard
} from '../../controller/boardsController.js';

const router = express.Router();

router.post('/', validateAuth, createBoard);
router.get('/', validateAuth, getBoardsByUser);
router.patch('/:id', validateAuth, updateBoard);
router.delete('/:id', validateAuth, deleteBoard);  // Ruta pentru ștergere

export default router;
