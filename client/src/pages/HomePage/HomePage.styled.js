import styled from 'styled-components';
import HomePage from './HomePage';

// todo: => stilurile pentru home page, modificat ce e deja scris

const StyledHomePage = styled(HomePage)`
  padding-top: 32px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 400px;
    width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    position: relative;
    padding-bottom: 190px;
    padding-top: calc(90px + 85px);
  }
`;

export default StyledHomePage;
