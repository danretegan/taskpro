// server/routes/api/cards.js
import express from 'express';
import {
  getCards,
  createCard,
  updateCard,
  deleteCard,
} from '../../controller/cardController.js';

const router = express.Router();

router.get('/boards/:boardId/columns/:columnId/cards', getCards);
router.post('/boards/:boardId/columns/:columnId/cards', createCard);
router.patch('/boards/:boardId/columns/:columnId/cards/:cardId', updateCard);
router.delete('/boards/:boardId/columns/:columnId/cards/:cardId', deleteCard);

export default router;
