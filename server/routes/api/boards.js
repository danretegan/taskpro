import express from 'express';
import validateAuth from '../../config/config-passport.js';
import {
  createBoard,
  getBoardsByUser,
  updateBoard,
  deleteBoard,
  addColumnToBoard,
  getColumnsByBoardId,
} from '../../controller/boardsController.js';

const router = express.Router();

router.post('/', validateAuth, createBoard);
router.get('/', validateAuth, getBoardsByUser);
router.patch('/:id', validateAuth, updateBoard);
router.delete('/:id', validateAuth, deleteBoard);

// Rute pentru gestionarea coloanelor
router.post('/:boardId/columns', validateAuth, addColumnToBoard);
router.get('/:boardId/columns', validateAuth, getColumnsByBoardId);

export default router;
