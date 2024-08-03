import { useEffect } from 'react';
import StyledLeftSideBar from '.././LeftSideBar/LeftSideBar.styled';

const BurgerMenu = ({ className: styles, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', addCloseEvent);

    function addCloseEvent(event) {
      event.key === 'Escape' && closeModal();
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', addCloseEvent);
    };
  });

  return (
    <div
      className={styles}
      onClick={event => event.currentTarget === event.target && closeModal()}
    >
      <StyledLeftSideBar closeBurgerMenu={closeModal} />
    </div>
  );
};

export default BurgerMenu;
