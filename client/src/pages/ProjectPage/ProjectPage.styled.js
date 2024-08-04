import styled from 'styled-components';
import ProjectPage from './ProjectPage';

const StyledProjectPage = styled(ProjectPage)`
  height: calc(100dvh - 60px);
  transition: all 0.35s ease-in-out;

  /* bg de test */
  background-color: lightcoral;

  @media (min-width: 768px) {
    height: calc(100dvh - 68px);
  }

  @media (min-width: 1440px) {
    margin-left: 260px;
  }
`;

export default StyledProjectPage;
