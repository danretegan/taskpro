import styled from 'styled-components';
import HomePage from './HomePage';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 437px;
  background: linear-gradient(to bottom, #ffffff, #ccffcc);
  padding-top: 32px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 400px;
    width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 1280px;
    position: relative;
    padding-bottom: 190px;
    padding-top: calc(90px + 85px);
  }
`;

export const Image = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const Logo = styled.span`
  svg {
    width: 50px; /* Adjust the width as needed */
    height: 50px; /* Adjust the height as needed */
    margin-right: 10px; /* Adjust margin as needed */
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  display: flex;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #161616;
  text-align: center;
  max-width: 335px;
  margin-bottom: 40px;
  margin-top: 20px;

  @media (min-width: 768px) {
    max-width: 473px;
  }
`;

export const Button = styled.button`
  width: 335px;
  height: 49px;
  background-color: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: medium;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`;

const StyledHomePage = styled(HomePage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #bedbb0);
  padding-top: 32px;
  padding-bottom: 100px;
  background-size: cover; /* This will make the background image cover the entire container */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */

  @media (min-width: 768px) {
    min-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    position: relative;
    padding-bottom: 190px;
    padding-top: calc(90px + 85px);
  }
`;

export default StyledHomePage;
