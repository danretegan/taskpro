import styled from 'styled-components';
import BurgerMenuBtn from './BurgerMenuBtn';

const StyledBurgerMenuBtn = styled(BurgerMenuBtn)`
  width: 24px;
  height: 24px;

  & {
    svg {
      height: 100%;
      width: 100%;
      transition: all 0.35s ease-in-out;

      &.dark {
        stroke: rgba(255, 255, 255, 1);
      }

      &.light,
      &.violet {
        stroke: rgba(22, 22, 22, 1);
      }

      &:hover {
        transform: scale(1.3);
      }
    }
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export default StyledBurgerMenuBtn;
