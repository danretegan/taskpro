import styled from 'styled-components';
import Header from './Header';
import useAuth from '../../hooks/useAuth';

const StyledHeader = styled(Header)`
  border: 2px solid black;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.light {
    background-color: wheat;
  }

  &.dark {
    background-color: black;
  }

  &.violet {
    background-color: blue;
  }

  button {
    padding: 50px;
  }

  button.violet {
    background-color: violet;
  }

  & {
    div.dropdownAndUser {
      display: flex;
      align-items: center;
      gap: 14px;
    }
  }
`;

export default StyledHeader;
