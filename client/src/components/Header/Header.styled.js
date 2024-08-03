import styled from 'styled-components';
import Header from './Header';

const StyledHeader = styled(Header)`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 375px;
  transition: all 0.35s ease-in-out;

  &.dark {
    background-color: rgba(22, 22, 22, 1);
  }

  &.light,
  &.violet {
    background-color: rgba(252, 252, 252, 1);
  }

  & {
    div.dropdownAndUser {
      display: flex;
      align-items: center;
      gap: 25px;
    }
  }

  @media (min-width: 768px) {
    padding: 18px 32px;
  }

  @media (min-width: 1440px) {
    padding: 18px 24px;
    justify-content: flex-end;
    margin-left: 260px;
  }
`;

export default StyledHeader;
