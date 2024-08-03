import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';

const StyledBurgerMenu = styled(BurgerMenu)`
  background-color: rgba(33, 33, 33, 0.5);
  /* background-color: rgba(21, 21, 21, 0.3); */
  height: 100dvh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  display: grid;
`;

export default StyledBurgerMenu;
