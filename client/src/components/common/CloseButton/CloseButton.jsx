import useAuth from '../../../hooks/useAuth';
import icons from '../../../assets/icons/icons.svg';

const CloseButton = ({ className: styles, handlerFunction }) => {
  const { theme } = useAuth();

  return (
    <button
      type="button"
      onClick={() => handlerFunction()}
      className={`${styles} ${theme}`}
    >
      <svg>
        <use href={`${icons}#icon-closeBtn`}></use>
      </svg>
    </button>
  );
};

export default CloseButton;
