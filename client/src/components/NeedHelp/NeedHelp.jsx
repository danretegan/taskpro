import cactusPot from '../../assets/images/cactusPot.png';
import icons from '../../assets/icons/icons.svg';
import useAuth from '../../hooks/useAuth';

const NeedHelp = ({ className: styles }) => {
  const { theme } = useAuth();

  return (
    <div className={`${styles} ${theme}`}>
      <img src={cactusPot} alt="Cactus Pot" />
      <p className={theme}>
        If you need help with <span>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>

      {/* todo: => modala need help */}
      <button
        type="button"
        className={theme}
        onClick={() => console.log('modala need help')}
      >
        <svg>
          <use href={`${icons}#icon-helpCircle`}></use>
        </svg>
        <span>Need help?</span>
      </button>
    </div>
  );
};

export default NeedHelp;
