import styled from 'styled-components';

// Funcție pentru a obține calea corectă a imaginii de fundal în funcție de dimensiunea ecranului și densitatea pixelilor
export const getBackgroundPath = (background, screenSize, isRetina) => {
  if (!background) return null;
  const fileName = background
    .split('/')
    .pop()
    .replace('.png', isRetina ? '@2x.jpg' : '.jpg');
  switch (screenSize) {
    case 'desktop':
      return `/src/assets/images/desktop/${fileName}`;
    case 'tablet':
      return `/src/assets/images/tablet/${fileName}`;
    case 'mobile':
      return `/src/assets/images/mobile/${fileName}`;
    default:
      return null;
  }
};

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$selectedProject ? 'flex-start' : 'center')};
  justify-content: ${props =>
    props.$selectedProject ? 'flex-start' : 'center'};
  height: calc(100vh - 64px); //! Ajustați în funcție de înălțimea Header-ului
  background-color: #ecedfd;
  padding: 20px;
  text-align: ${props => (props.$selectedProject ? 'left' : 'center')};
  width: 100%;
  background-image: ${props =>
    props.$selectedProject ? `url(${props.$background})` : 'none'};
  background-size: cover;
  background-position: center;
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #161616;
  max-width: 335px;
  margin-top: ${props => (props.$selectedProject ? '20px' : '0')};

  span {
    font-weight: bold;
    color: #5255bc;
  }

  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 486px;
  }
`;

export const AddColumnButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  color: #ffffff;
  background-color: #5255bc;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4146a3;
  }
`;
