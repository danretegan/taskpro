import styled from 'styled-components';
import ProjectsList from './ProjectsList';

const StyledProjectList = styled(ProjectsList)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
`;

export default StyledProjectList;
