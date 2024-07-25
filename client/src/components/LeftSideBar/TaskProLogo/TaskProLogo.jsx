import icons from '../../../assets/icons/icons.svg';

const TaskProLogo = ({ className: styles }) => {
  return (
    <div className={styles}>
      <svg>
        <use href={`${icons}#icon-logoBlue`}></use>
      </svg>
      <span>Task Pro</span>
    </div>
  );
};

export default TaskProLogo;
