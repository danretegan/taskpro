import useAuth from '../../hooks/useAuth';
import StyledTaskProLogo from './TaskProLogo/TaskProLogo.styled';
import StyledCreateNewBoard from './CreateNewBoard/CreateNewBoard.styled';
import ProjectList from './ProjectList/ProjectList'; // Import corect
import StyledNeedHelp from './NeedHelp/NeedHelp.styled';
import StyledLogoutSection from './LogoutSection/LogoutSection.styled';

const LeftSideBar = ({ className: styles }) => {
  const { theme } = useAuth();

  const projects = [
    { id: 1, name: 'Project office 1' },
    { id: 2, name: 'Project office 2' },
    { id: 3, name: 'Project office 3' },
  ];

  return (
    <div className={`${styles} ${theme}`}>
      {/* Task Pro Logo */}
      <StyledTaskProLogo />
      {/* Create A New Board */}
      <StyledCreateNewBoard />
      {/* Transmitem lista de proiecte */}
      <ProjectList projects={projects} />
      {/* Need Help */}
      <StyledNeedHelp />
      {/* Logout Section */}
      <StyledLogoutSection />
    </div>
  );
};

export default LeftSideBar;
