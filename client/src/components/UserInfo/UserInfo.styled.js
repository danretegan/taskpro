import styled from 'styled-components';
import UserInfo from './UserInfo';

const StyledUserInfo = styled(UserInfo)`
  display: flex;
  align-items: center;
  gap: 15px;

  & {
    .username {
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: -0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
      transition: all 0.35s ease-in-out;

      &.dark {
        color: rgba(255, 255, 255, 1);
      }
      &.light,
      &.violet {
        color: rgba(22, 22, 22, 1);
      }

      &:hover {
        opacity: 0.5;
        transition: all 0.35s ease-in-out;
      }
    }

    button.userPhoto {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.35s ease-in-out;

      &.dark:hover:has(> svg),
      &.light:hover:has(> svg) {
        box-shadow: rgba(190, 219, 176, 1) 0px 4px 10px 0px;
      }

      &.violet:hover:has(> svg) {
        box-shadow: rgba(184, 188, 253, 1) 0px 4px 10px 0px;
      }

      &:hover {
        transition: all 0.35s ease-in-out;
        transform: scale(1.2);
        border: 0.5px solid grey;
      }

      & {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default StyledUserInfo;
