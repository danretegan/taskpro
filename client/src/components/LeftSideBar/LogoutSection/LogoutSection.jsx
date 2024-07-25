import icons from '../../../assets/icons/icons.svg';

const LogoutSection = ({ className: styles }) => {
  return (
    <div className={styles}>
      <button onClick={() => console.log('Logout button clicked')}>
        <svg>
          <use href={`${icons}#icon-logout`}></use>
        </svg>
      </button>
      <span>Log out</span>
    </div>
  );
};

export default LogoutSection;
