import styled from 'styled-components';
import CloseButton from './CloseButton';

const StyledCloseButton = styled(CloseButton)`
  width: 22px;
  height: 22px;
  padding: 2px;

  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.35s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  &.dark {
    color: rgba(255, 255, 255, 1);

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(190, 219, 176, 1);
      background-color: rgba(190, 219, 176, 1);
      color: rgba(21, 21, 21, 1);
    }
  }

  &.light {
    color: rgba(22, 22, 22, 1);

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(190, 219, 176, 1);
      background-color: rgba(190, 219, 176, 1);
      color: rgba(252, 252, 252, 1);
    }
  }

  &.violet {
    color: rgba(22, 22, 22, 1);

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(184, 188, 253, 1);
      background-color: rgba(184, 188, 253, 1);
      color: rgba(252, 252, 252, 1);
    }
  }

  & {
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default StyledCloseButton;
