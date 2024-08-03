import styled from 'styled-components';
import Logo from './Logo';

const StyledLogo = styled(Logo)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: fit-content;
  padding-left: 14px;
  padding-right: 14px;
  transition: all 0.35s ease-in-out;

  align-self: start;

  &:hover {
    opacity: 0.5;
  }

  & {
    svg {
      height: 32px;
      width: 32px;
    }

    span {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: -0.04em;
      transition: all 0.35s ease-in-out;

      &.dark,
      &.violet {
        color: rgba(255, 255, 255, 1);
      }

      &.light {
        color: rgba(22, 22, 22, 1);
      }
    }
  }

  @media (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export default StyledLogo;
