import styled from 'styled-components';
import ThemeDropdown from './ThemeDropdown';

const StyledThemeDropdown = styled(ThemeDropdown)`
  & {
    button.chooseThemeBtn {
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 4px;
      transition: all 0.35s ease-in-out;

      &.dark {
        color: rgba(255, 255, 255, 0.8);
      }

      &.light,
      &.violet {
        color: rgba(22, 22, 22, 0.8);
      }

      &:hover {
        transform: scale(1.15);
        transition: all 0.35s ease-in-out;
      }
    }

    div.dropdownOptions {
      position: absolute;
      top: 45px;
      right: -80px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-radius: 8px;
      padding: 18px 44px 18px 18px;

      &.dark {
        background-color: rgba(21, 21, 21, 1);
        border: 1px solid rgba(190, 219, 176, 1);
        color: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);

        & {
          button:nth-of-type(2) {
            font-weight: bold;
            color: rgba(157, 200, 136, 1);
          }
        }
      }

      &.light {
        background-color: rgba(252, 252, 252, 1);
        border: 1px solid rgba(190, 219, 176, 1);
        color: rgba(22, 22, 22, 1);
        box-shadow: 0px 4px 16px 0px rgba(190, 219, 176, 1);

        & {
          button:nth-of-type(1) {
            font-weight: bold;
            color: rgba(157, 200, 136, 1);
          }
        }
      }

      &.violet {
        background-color: rgba(252, 252, 252, 1);
        border: 1px solid rgba(184, 188, 253, 1);
        color: rgba(22, 22, 22, 1);
        box-shadow: 0px 4px 16px 0px rgba(184, 188, 253, 1);

        & {
          button:nth-of-type(3) {
            font-weight: bold;
            color: rgba(82, 85, 188, 1);
          }
        }
      }

      & {
        button {
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
          text-align: left;
          letter-spacing: -0.02em;
          color: inherit;
          transition: all 0.35s ease-in-out;

          &:hover {
            transform: scale(1.2);
            transition: all 0.35s ease-in-out;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    & {
      div.dropdownOptions {
        top: 49px;
      }
    }
  }
`;

export default StyledThemeDropdown;
