import icons from '../../assets/icons/icons.svg';
import useAuth from '../../hooks/useAuth';

const TaskProLogo = ({ className: styles }) => {
  const { theme } = useAuth();

  return (
    <a href="/" className={styles}>
      <svg>
        <use
          href={
            theme === 'dark' || theme === 'light'
              ? `${icons}#icon-logoBlackWhite`
              : `${icons}#icon-logoBlue`
          }
        ></use>
      </svg>
      <span className={theme}>Task Pro</span>
    </a>
  );
};

export default TaskProLogo;
