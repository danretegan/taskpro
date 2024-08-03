import styled from 'styled-components';
import DashboardPage from './DashboardPage';

const StyledDashboardPage = styled(DashboardPage)`
  padding: 14px 20px;
  height: calc(100dvh - 60px);
  min-width: 375px;
  display: grid;
  place-items: center;
  overflow: auto;
  transition: all 0.35s ease-in-out;

  & {
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.02em;
      text-align: center;
      width: 335px;
      transition: all 0.35s ease-in-out;

      b {
        cursor: pointer;
        transition: all 0.35s ease-in-out;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  &.dark {
    background-color: rgba(31, 31, 31, 1);

    p {
      color: rgba(255, 255, 255, 0.5);

      b {
        color: rgba(157, 200, 136, 1);
      }
    }
  }

  &.light {
    background-color: rgba(246, 246, 247, 1);

    p {
      color: rgba(22, 22, 22, 0.7);

      b {
        color: rgba(157, 200, 136, 1);
      }
    }
  }

  &.violet {
    background-color: rgba(236, 237, 253, 1);

    p {
      color: rgba(22, 22, 22, 0.7);

      b {
        color: rgba(82, 85, 188, 1);
      }
    }
  }

  @media (min-width: 768px) {
    padding: 20px 32px;
    height: calc(100dvh - 68px);

    & {
      p {
        font-size: 14px;
        line-height: 18px;
        width: 486px;
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 18px 24px;
    margin-left: 260px;
  }
`;

export default StyledDashboardPage;
