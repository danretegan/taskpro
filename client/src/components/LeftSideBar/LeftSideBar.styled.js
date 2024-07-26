import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';

const StyledLeftSideBar = styled(LeftSideBar)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #5255bc;
  color: white;
  height: 100dvh;
  width: 225px;
  /* z-index: 1;  */
`;

export default StyledLeftSideBar;
