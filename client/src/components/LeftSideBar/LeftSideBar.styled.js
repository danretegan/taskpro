import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';
import StyledNeedHelp from './NeedHelp/NeedHelp.styled';
import StyledLogoutSection from './LogoutSection/LogoutSection.styled';

const StyledLeftSideBar = styled(LeftSideBar)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #5255bc;
  color: white;
  height: 100dvh;
  width: 225px;

  .project-list-container {
    flex: 1;
    overflow-y: auto;
  }

  /* Position Need Help and Logout Section from bottom */
  ${StyledNeedHelp} {
    /* margin-top: auto; */
  }

  ${StyledLogoutSection} {
    margin-top: 1px; /* Add some space between Need Help and Logout Section */
  }
`;

export default StyledLeftSideBar;
