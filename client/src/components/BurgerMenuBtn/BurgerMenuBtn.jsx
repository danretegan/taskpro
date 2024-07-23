import { createPortal } from 'react-dom';
import StyledBurgerMenu from '../BurgerMenu/BurgerMenu.styled';
import { useState } from 'react';

const BurgerMenuBtn = ({ className: styles }) => {
  // todo: => aici vine botunul burger menu

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsBurgerMenuOpen(true)} className={styles}>
        AICI E BUTONUL
      </button>

      {isBurgerMenuOpen &&
        createPortal(
          <StyledBurgerMenu closeModal={() => setIsBurgerMenuOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default BurgerMenuBtn;
