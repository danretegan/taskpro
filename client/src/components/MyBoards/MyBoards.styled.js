import styled from 'styled-components';
import MyBoards from './MyBoards';

const StyledMyBoards = styled(MyBoards)`
  margin-top: 60px;
  margin-bottom: 40px;
  align-self: start;
  padding-left: 14px;
  padding-right: 14px;

  & {
    > span {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.02em;
      transition: all 0.35s ease-in-out;

      &.dark,
      &.violet {
        color: rgba(255, 255, 255, 0.5);
      }

      &.light {
        color: rgba(22, 22, 22, 0.5);
      }
    }

    div {
      padding-top: 14px;
      padding-bottom: 14px;
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.35s ease-in-out;

      &.dark,
      &.violet {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      &.light {
        border-top: 1px solid rgba(22, 22, 22, 0.1);
        border-bottom: 1px solid rgba(22, 22, 22, 0.1);
      }

      & {
        span {
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: -0.02em;
          width: 76px;
          transition: all 0.35s ease-in-out;

          &.dark,
          &.violet {
            color: rgba(255, 255, 255, 1);
          }

          &.light {
            color: rgba(22, 22, 22, 1);
          }
        }

        button {
          width: 40px;
          height: 36px;
          border-radius: 6px;
          padding: 8px 10px;
          transition: all 0.35s ease-in-out;

          & {
            svg {
              height: 100%;
              width: 100%;
              transition: all 0.35s ease-in-out;
            }
          }

          &.dark,
          &.light {
            background-color: rgba(190, 219, 176, 1);

            svg {
              stroke: rgba(18, 18, 18, 1);
            }

            &:hover {
              background-color: rgba(157, 200, 136, 1);
              box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);
              transform: scale(1.1);

              svg {
                stroke: rgba(255, 255, 255, 1);
              }
            }
          }

          &.violet {
            background-color: rgba(184, 188, 253, 1);

            svg {
              stroke: rgba(255, 255, 255, 1);
            }

            &:hover {
              box-shadow: 0px 4px 10px 0px rgba(151, 156, 234, 1);
              transform: scale(1.1);

              svg {
                stroke: rgba(18, 18, 18, 1);
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default StyledMyBoards;
