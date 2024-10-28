// server/controllers/cardController.js
import Card from '../service/schemas/Card.js';

// Fetch all cards for a specific column
export const getCards = async (req, res) => {
  try {
    const { boardId, columnId } = req.params;
    const cards = await Card.find({ boardId, columnId });
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch cards', error });
  }
};

// Create a new card in a specific column
export const createCard = async (req, res) => {
  try {
    const { boardId, columnId } = req.params;
    const { title, description, labelColor, deadline } = req.body;

    // Creăm un nou card cu `labelColor` din frontend
    const newCard = new Card({
      boardId,
      columnId,
      title,
      description,
      labelColor,
      deadline,
    });

    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create card', error });
  }
};

// Update a specific card
export const updateCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const { title, description, labelColor, deadline } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { title, description, labelColor, deadline },
      { new: true }
    );

    if (!updatedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update card', error });
  }
};

// Delete a specific card
export const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const deletedCard = await Card.findByIdAndDelete(cardId);

    if (!deletedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }

    res.status(200).json({ message: 'Card deleted successfully', cardId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete card', error });
  }
};
