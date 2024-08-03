import styled from 'styled-components';
import NeedHelp from './NeedHelp';

const StyledNeedHelp = styled(NeedHelp)`
  border-radius: 8px;
  margin: 24px 14px;
  padding: 14px;
  transition: all 0.35s ease-in-out;

  &.dark {
    background-color: rgba(31, 31, 31, 1);
  }

  &.light {
    background-color: rgba(246, 246, 247, 1);
  }

  &.violet {
    background-color: rgba(236, 237, 253, 0.4);
  }

  & {
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.02em;
      margin-top: 14px;
      margin-bottom: 18px;
      transition: all 0.35s ease-in-out;

      span {
        font-weight: bold;
        transition: all 0.35s ease-in-out;
      }

      &.dark {
        color: rgba(255, 255, 255, 1);

        span {
          color: rgba(157, 200, 136, 1);
        }
      }

      &.light {
        color: rgba(22, 22, 22, 1);

        span {
          color: rgba(157, 200, 136, 1);
        }
      }

      &.violet {
        color: rgba(255, 255, 255, 1);

        span {
          color: rgba(82, 85, 188, 1);
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.35s ease-in-out;

      &:hover {
        transform: scale(1.1);
        opacity: 0.7;
      }

      &.dark,
      &.violet {
        color: rgba(255, 255, 255, 1);
      }

      &.light {
        color: rgba(22, 22, 22, 1);
      }

      & {
        svg {
          width: 20px;
          height: 20px;
        }

        span {
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: -0.02em;
        }
      }
    }
  }

  @media (min-width: 768px) {
    margin: 24px;
    padding: 20px;

    & {
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

export default StyledNeedHelp;
