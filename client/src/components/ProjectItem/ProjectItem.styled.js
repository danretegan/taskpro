import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const StyledProjectItem = styled(ProjectItem)`
  padding: 20px 14px;
  position: relative;
  transition: all 0.35s ease-in-out;

  display: flex;
  justify-content: space-between;

  & {
    a {
      display: flex;
      align-items: center;
      gap: 4px;
      width: fit-content;
      transition: all 0.35s ease-in-out;

      &.dark,
      &.violet {
        color: rgba(255, 255, 255, 0.5);
      }

      &.light {
        color: rgba(22, 22, 22, 0.5);
      }

      & {
        svg {
          width: 18px;
          height: 18px;
        }

        span {
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: -0.02em;
        }
      }

      &:hover:not(.active) {
        transform: scale(1.1);
        opacity: 0.7;
      }
    }

    div.actionIcons {
      display: flex;
      align-items: center;
      gap: 10px;

      &.dark,
      &.violet {
        color: rgba(255, 255, 255);
      }

      &.light {
        color: rgba(22, 22, 22, 0.5);
      }

      svg {
        width: 16px;
        height: 16px;
        opacity: 0.5;
        cursor: pointer;
        transition: all 0.35s ease-in-out;

        &:hover {
          transform: scale(1.3);
          opacity: 1;
        }
      }
    }
  }

  &:has(> a:not(.active):hover) {
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 4px;
      position: absolute;
      top: 0;
      right: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: grey;
    }
  }

  &:has(> a.active) {
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 4px;
      position: absolute;
      top: 0;
      right: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      transition: all 0.35s ease-in-out;
    }
  }

  &:has(> a.active.dark) {
    background-color: rgba(31, 31, 31, 1);

    a {
      color: rgba(255, 255, 255, 1);
    }

    &:after {
      background: rgba(190, 219, 176, 1);
    }
  }

  &:has(> a.active.light) {
    background-color: rgba(246, 246, 247, 1);

    a {
      color: rgba(22, 22, 22, 1);
    }

    &:after {
      background: rgba(190, 219, 176, 1);
    }
  }

  &:has(> a.active.violet) {
    background-color: rgba(255, 255, 255, 0.5);

    a {
      color: rgba(255, 255, 255, 1);
    }

    &:after {
      background: rgba(255, 255, 255, 1);
    }
  }

  @media (min-width: 768px) {
    padding: 20px 24px;

    & {
      a {
        gap: 8px;
      }
    }
  }
`;

export default StyledProjectItem;
