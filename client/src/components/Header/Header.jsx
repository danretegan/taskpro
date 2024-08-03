import StyledUserInfo from '../UserInfo/UserInfo.styled';
import StyledThemeDropdown from '../ThemeDropdown/ThemeDropdown.styled';
import useResponsive from '../../hooks/useResponsive';
import useAuth from '../../hooks/useAuth';
import StyledBurgerMenuBtn from '../BurgerMenuBtn/BurgerMenuBtn.styled';

const Header = ({ className: styles }) => {
  const { isOnMobile, isOnTablet } = useResponsive();
  const { theme } = useAuth();

  return (
    <header className={`${styles} ${theme}`}>
      {(isOnMobile || isOnTablet) && <StyledBurgerMenuBtn />}

      <div className="dropdownAndUser">
        <StyledThemeDropdown />
        <StyledUserInfo />
      </div>
    </header>
  );
};

export default Header;
