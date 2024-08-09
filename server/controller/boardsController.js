import Board from '../service/schemas/Board.js';

export const createBoard = async (req, res) => {
  try {
    const { title, icon, background } = req.body;
    const userId = req.user._id;

    const newBoard = await Board.create({ title, icon, background, userId });

    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBoardsByUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const boards = await Board.find({ userId });

    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, icon, background } = req.body;

    const updatedBoard = await Board.findByIdAndUpdate(
      id,
      { title, icon, background },
      { new: true }
    );

    if (!updatedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }

    res.status(200).json(updatedBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBoard = await Board.findByIdAndDelete(id);

    if (!deletedBoard) {
      return res.status(404).json({ message: 'Board not found' });
    }

    res.status(200).json({ message: 'Board deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addColumnToBoard = async (req, res) => {
  try {
    const { boardId } = req.params;
    const { title } = req.body;

    const board = await Board.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    board.columns.push({ title });
    await board.save();

    res.status(201).json(board.columns);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getColumnsByBoardId = async (req, res) => {
  try {
    const { boardId } = req.params;

    const board = await Board.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    res.status(200).json(board.columns);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteColumnFromBoard = async (req, res) => {
  try {
    const { boardId, columnTitle } = req.params;

    const board = await Board.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    board.columns = board.columns.filter(
      column => column.title !== columnTitle
    );

    await board.save();

    res.status(200).json({ message: 'Column deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateColumnTitle = async (req, res) => {
  try {
    const { boardId, columnTitle } = req.params;
    const { newTitle } = req.body;

    const board = await Board.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: 'Board not found' });
    }

    const column = board.columns.find(column => column.title === columnTitle);
    if (!column) {
      return res.status(404).json({ message: 'Column not found' });
    }

    column.title = newTitle;
    await board.save();

    res.status(200).json(column);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
