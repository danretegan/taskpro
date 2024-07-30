import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux'; // Importăm useSelector pentru a accesa state-ul global
import StyledTaskProLogo from './TaskProLogo/TaskProLogo.styled';
import StyledCreateNewBoard from './CreateNewBoard/CreateNewBoard.styled';
import ProjectList from './ProjectList/ProjectList'; 
import StyledNeedHelp from './NeedHelp/NeedHelp.styled';
import StyledLogoutSection from './LogoutSection/LogoutSection.styled';

const LeftSideBar = ({ className: styles }) => {
  const { theme } = useAuth();
  const projects = useSelector(state => state.projects); // Accesăm proiectele din state-ul global

  return (
    <div className={`${styles} ${theme}`}>
      {/* Task Pro Logo */}
      <StyledTaskProLogo />
      {/* Create A New Board */}
      <StyledCreateNewBoard />
      {/* Transmitem lista de proiecte */}
      <div className="project-list-container">
        <ProjectList projects={projects} />
      </div>
      {/* Need Help */}
      <StyledNeedHelp />
      {/* Logout Section */}
      <StyledLogoutSection />
    </div>
  );
};

export default LeftSideBar;
