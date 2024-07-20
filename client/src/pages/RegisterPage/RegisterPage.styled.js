import styled from 'styled-components';
import RegisterPage from './RegisterPage';

// todo: => stilurile pentur home page, doar pentru pagina (exterior cum ar veni), nu pentru componentele salte

const StyledRegisterPage = styled(RegisterPage)`
  padding-top: 50px;
  padding-bottom: 120px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 400px;
    width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    position: relative;
    padding-bottom: 140px;
    padding-top: calc(45px + 85px);
  }
`;

export default StyledRegisterPage;
