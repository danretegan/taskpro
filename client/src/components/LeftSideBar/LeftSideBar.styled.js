import styled from 'styled-components';
import LeftSideBar from './LeftSideBar';

const StyledLeftSideBar = styled(LeftSideBar)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #5255bc;
  color: white;
  height: 100dvh;
  width: 225px;
`;

export const LogoSection = styled.div`
  padding-top: 14px;
  padding-left: 14px;
`;

export const Logo = styled.span`
  svg {
    width: 32px; /* Adjust the width as needed */
    height: 32px; /* Adjust the height as needed */
    margin-right: 8px; /* Adjust margin as needed */
  }
`;

//* Task Pro
export const Title1 = styled.h4`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

//* My boards
export const Title2 = styled.p`
  padding-left: 14px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 400;
  padding-top: 70px;
`;

//* Create A New Board:
export const CreateANewBoard = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 14px;
  margin-right: 14px;
  padding-top: 14px;
  padding-right: 4px;
  padding-bottom: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: space-between;
  align-items: center;
`;

export const Title3 = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: #b8bcfd;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  padding: 8px;
  border: none;

  &:hover {
    background-color: #979CEA ;
  }
`;

//* Need Help:
export const NeedHelp = styled.div`
  background-color: rgba(236, 237, 253, 0.4);
  border-radius: 8px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 24px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 12px;
  font-weight: 400;
  height: 197px;
`;

//* Logout Section:
export const LogoutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
`;

export const Logout = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 14px;
/* Folosim currentColor pentru a moșteni culoarea textului părinte */
  stroke: currentColor; 
  fill: none; /* Ne asigurăm că interiorul este gol */
  color: white;

  &:hover svg {
    color: #B8BCFD;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 500;


`;

export default StyledLeftSideBar;
