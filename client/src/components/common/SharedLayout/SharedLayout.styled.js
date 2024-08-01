import styled from 'styled-components';

export const SharedLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ecedfd;
  height: 100dvh;

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #ecedfd;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  max-width: 486px;
  padding: 20px;
  text-align: center;
  margin: auto;

  //! -64px. De ajustat in functie de inaltimea Header-ului!
  @media (max-width: 1439px) {
    height: calc(100vh - 64px);
    justify-content: center;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #161616;

  span {
    font-weight: bold;
    color: #5255bc;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RightSideDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ecedfd;

  @media (min-width: 1440px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
