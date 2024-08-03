import useAuth from '../../hooks/useAuth';
import StyledLogo from '../Logo/Logo.styled';
import StyledMyBoards from '../MyBoards/MyBoards.styled';
import StyledProjectList from '../ProjectsList/ProjectsList.styled';
import StyledLogoutBtn from '../LogoutBtn/LogoutBtn.styled';
import StyledNeedHelp from '../NeedHelp/NeedHelp.styled';

const LeftSideBar = ({ className: styles, closeBurgerMenu }) => {
  const { theme } = useAuth();

  return (
    <aside className={`${styles} ${theme}`}>
      <StyledLogo />
      <StyledMyBoards />
      <StyledProjectList closeBurgerMenu={closeBurgerMenu} />
      <StyledNeedHelp />
      <StyledLogoutBtn />
    </aside>
  );
};

export default LeftSideBar;
