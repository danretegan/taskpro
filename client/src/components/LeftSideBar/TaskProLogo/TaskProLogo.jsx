import { useNavigate } from 'react-router-dom';
import icons from '../../../assets/icons/icons.svg';

const TaskProLogo = ({ className: styles }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles} onClick={handleClick}>
      <svg>
        <use href={`${icons}#icon-logoBlue`}></use>
      </svg>
      <span>Task Pro</span>
    </div>
  );
};

export default TaskProLogo;
