import { StyledProjectList } from './ProjectList.styled';
import ProjectListItem from '../ProjectListItem/ProjectListItem';

const ProjectList = ({ className: styles, projects = [] }) => {
  return (
    <StyledProjectList className={styles}>
      {projects.map(project => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;
