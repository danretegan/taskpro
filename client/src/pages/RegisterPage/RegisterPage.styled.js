// client/src/pages/RegisterPage/RegisterPage.styled.js
import styled from 'styled-components';
import RegisterPage from './RegisterPage';

const StyledRegisterPage = styled(RegisterPage)`
  padding-top: 224px;
  padding-bottom: 225px;
  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #BEDBB0 92.19%);
  min-height: 100vh;

  @media (min-width: 768px) {
    padding-top: 314px;
    padding-bottom: 315px;
  }

  @media (min-width: 1440px) {
    padding-top: 188px;
    padding-bottom: 187px;
  }
`;

export default StyledRegisterPage;
