import styled from 'styled-components';
import LogoutBtn from './LogoutBtn';

const StyledLogoutBtn = styled(LogoutBtn)`
  display: flex;
  align-items: center;
  transition: all 0.35s ease-in-out;
  gap: 12px;
  padding-left: 24px;

  & {
    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 32px;
      height: 32px;
      transition: all 0.35s ease-in-out;
    }

    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      transition: all 0.35s ease-in-out;
    }
  }

  &.dark {
    &:hover {
      svg {
        stroke: red;
      }
    }

    & {
      svg {
        stroke: rgba(190, 219, 176, 1);
      }

      span {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  &.light {
    &:hover {
      svg {
        stroke: red;
      }
    }

    & {
      svg {
        stroke: rgba(157, 200, 136, 1);
      }

      span {
        color: rgba(22, 22, 22, 1);
      }
    }
  }

  &.violet {
    &:hover {
      svg {
        stroke: red;
      }
    }

    & {
      svg {
        stroke: rgba(255, 255, 255, 1);
      }

      span {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  @media (min-width: 1440px) {
    & {
      span {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`;

export default StyledLogoutBtn;
