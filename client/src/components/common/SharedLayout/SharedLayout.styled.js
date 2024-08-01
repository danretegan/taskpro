import styled from 'styled-components';

export const SharedLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ecedfd;
  height: 100dvh;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
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
