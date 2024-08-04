import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';

const StyledLeftSideBar = styled(LeftSideBar)`
  padding-top: 14px;
  padding-bottom: 14px;
  height: 100dvh;
  width: 225px;
  position: relative;
  transition: all 0.35s ease-in-out;
  overflow-y: auto;
  display: grid;
  grid-template-rows: min-content min-content minmax(100px, 1fr) min-content min-content;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  &.dark {
    background-color: rgba(18, 18, 18, 1);
  }

  &.light {
    background-color: rgba(250, 250, 250, 1);
  }

  &.violet {
    background-color: rgba(82, 85, 188, 1);
  }

  @media (min-width: 768px) {
    width: 260px;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media (min-width: 1440px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export default StyledLeftSideBar;
