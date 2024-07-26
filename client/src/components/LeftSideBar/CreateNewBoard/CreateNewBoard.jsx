import { useNavigate } from 'react-router-dom';

const CreateNewBoard = ({ className: styles }) => {
  const navigate = useNavigate();

  return (
    <div className={styles}>
      <h4>My Boards</h4>
      <section>
        <span>
          Create a <br />
          new board
        </span>
        <button onClick={() => navigate('/newboard')}>+</button>
      </section>
    </div>
  );
};

export default CreateNewBoard;
