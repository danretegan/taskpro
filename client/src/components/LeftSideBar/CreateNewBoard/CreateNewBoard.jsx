import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../../redux/projects/projectsSlice';
import NewBoard from '../../NewBoard/NewBoard.styled';

const CreateNewBoard = ({ className: styles }) => {
  const [isNewBoardOpen, setIsNewBoardOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNewBoard = () => setIsNewBoardOpen(true);
  const handleCloseNewBoard = () => setIsNewBoardOpen(false);
  const handleCreateBoard = (boardData) => {
    dispatch(createProject(boardData));
    handleCloseNewBoard();
  };

  return (
    <div className={styles}>
      <h4>My Boards</h4>
      <section>
        <span>
          Create a <br />
          new board
        </span>
        <button onClick={handleOpenNewBoard}>+</button>
      </section>
      {isNewBoardOpen && (
        <NewBoard
          isOpen={isNewBoardOpen}
          onClose={handleCloseNewBoard}
          onCreate={handleCreateBoard}
        />
      )}
    </div>
  );
};

export default CreateNewBoard;
