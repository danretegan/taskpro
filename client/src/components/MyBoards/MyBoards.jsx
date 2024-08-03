import useAuth from '../../hooks/useAuth';
import icons from '../../assets/icons/icons.svg';

const MyBoards = ({ className: styles }) => {
  const { theme } = useAuth();

  return (
    <div className={styles}>
      <span className={theme}>My Boards</span>
      <div className={theme}>
        <span className={theme}>Create a new board</span>
        <button type="button" className={theme}>
          <svg>
            <use href={`${icons}#icon-add`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MyBoards;
