import {
  Container,
  Image,
  Title,
  Subtitle,
  Button,
  Logo,
} from './HomePage.styled';
import logoImage from '../../assets/Images/Logo.png';
import icons from '../../assets/symbol-defs.svg';

const HomePage = ({ className: styles }) => {
  return (
    <>
      <Container className={styles}>
        <Image src={logoImage} alt="Task Pro Logo" />
        <Title>
          <Logo>
            <svg>
              <use href={`${icons}#icon-logoBlackWhite`}></use>
            </svg>
          </Logo>
          Task Pro
        </Title>
        <Subtitle>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don&apos;t wait, start achieving your goals now!
        </Subtitle>
        <Button>Registration</Button>
        <Button>Log In</Button>
      </Container>
    </>
  );
};

export default HomePage;
