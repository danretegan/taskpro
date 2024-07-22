import StyledLeftSideBar from '.././LeftSideBar/LeftSideBar.styled';

const BurgerMenu = ({ className: styles, closeModal }) => {
  return (
    <div
      className={styles}
      onClick={event => event.currentTarget === event.target && closeModal()}
    >
      <StyledLeftSideBar />
    </div>
  );
};

export default BurgerMenu;
