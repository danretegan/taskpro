import {
  Button,
  CreateANewBoard,
  Logo,
  LogoSection,
  Logout,
  LogoutSection,
  NeedHelp,
  Text,
  Title1,
  Title2,
  Title3,
} from './LeftSideBar.styled';
import icons from '../../assets/icons/icons.svg';
import useAuth from '../../hooks/useAuth';
import cactusPot from '../../assets/images/cactusPot.png';
import ProjectList from '../ProjectList/ProjectList'; // Import corect

const LeftSideBar = ({ className: styles }) => {
  const { theme } = useAuth();

  const projects = [
    { id: 1, name: 'Project office 1' },
    { id: 2, name: 'Project office 2' },
    { id: 3, name: 'Project office 3' },
  ];

  return (
    <div className={`${styles} ${theme}`}>
      <LogoSection>
        <Title1>
          <Logo>
            <svg>
              <use href={`${icons}#icon-logoBlue`}></use>
            </svg>
          </Logo>
          Task Pro
        </Title1>
      </LogoSection>
      <Title2>My boards</Title2>
      <CreateANewBoard>
        <Title3>
          Create a <br /> new board
        </Title3>
        <Button>+</Button>
      </CreateANewBoard>
      <ProjectList projects={projects} /> {/* Transmitem lista de proiecte */}
      <NeedHelp>
        <img src={cactusPot} alt="Cactus Pot" />
        <p>
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </p>
        <p> Need help?</p>
      </NeedHelp>
      <LogoutSection>
        <button>
          <Logout>
            <svg>
              <use href={`${icons}#icon-logout`}></use>
            </svg>
          </Logout>
        </button>
        <Text>Log out</Text>
      </LogoutSection>
    </div>
  );
};

export default LeftSideBar;
