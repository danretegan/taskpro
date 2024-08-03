import styled from 'styled-components';
import LogoutModal from './LogoutModal';

const StyledLogoutModal = styled(LogoutModal)`
  background-color: rgba(33, 33, 33, 0.5);
  /* background-color: rgba(21, 21, 21, 0.3); */
  height: 100dvh;
  width: 100%;
  padding: 65px 20px;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  align-items: center;
  justify-content: center;

  & {
    div.modalContent {
      justify-self: center;
      width: 335px;
      border-radius: 8px;
      padding: 50px 24px 30px 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
      transition: all 0.35s ease-in-out;

      &.dark {
        background-color: rgba(21, 21, 21, 1);
        border: 1px solid rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);

        p {
          color: rgba(255, 255, 255, 1);
        }
      }

      &.light {
        background-color: rgba(252, 252, 252, 1);
        border: 1px solid rgba(22, 22, 22, 1);
        box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);

        p {
          color: rgba(22, 22, 22, 1);
        }
      }

      &.violet {
        background-color: rgba(252, 252, 252, 1);
        border: 1px solid rgba(22, 22, 22, 1);
        box-shadow: 0px 4px 16px 0px rgba(184, 188, 253, 1);

        p {
          color: rgba(22, 22, 22, 1);
        }
      }

      & {
        p {
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
          letter-spacing: -0.02em;
          text-align: center;
          transition: all 0.35s ease-in-out;
          width: 230px;
        }

        p + button {
          width: 120px;

          &:hover {
            box-shadow: 0px 4px 10px 0px red;
          }

          &:before {
            background-color: red;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    & {
      div.modalContent {
        width: 450px;
        gap: 60px;

        p {
          font-size: 25px;
          line-height: 35px;
          width: 270px;
        }
      }
    }
  }
`;

export default StyledLogoutModal;
