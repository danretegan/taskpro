import { createPortal } from 'react-dom';
import StyledBurgerMenu from '../BurgerMenu/BurgerMenu.styled';
import { useState } from 'react';
import icons from '../../assets/icons/icons.svg';
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';

const BurgerMenuBtn = ({ className: styles }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { isOnMobile, isOnTablet } = useResponsive();
  const { theme } = useAuth();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsBurgerMenuOpen(true)}
        className={styles}
      >
        <svg className={`${theme}`}>
          <use href={`${icons}#icon-burger-menu`}></use>
        </svg>
      </button>

      {isBurgerMenuOpen &&
        (isOnMobile || isOnTablet) &&
        createPortal(
          <StyledBurgerMenu closeModal={() => setIsBurgerMenuOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default BurgerMenuBtn;
