import {
  EditIconButton,
  IconsSection,
  ProjectIcon,
  ProjectSectionButton,
  StyledProjectListItem,
} from './ProjectListItem.styled';
import icons from '../../../assets/icons/icons.svg';

const ProjectListItem = ({ project, onEdit, onDelete }) => {
  return (
    <StyledProjectListItem>
      <ProjectSectionButton onClick={() => console.log('Project button clicked')}>
        <ProjectIcon>
          <svg>
            <use href={`${icons}#${project.icon}`}></use>
          </svg>
        </ProjectIcon>
        {project.title}
      </ProjectSectionButton>
      <IconsSection>
        <EditIconButton onClick={() => onEdit(project)}>
          <svg>
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </EditIconButton>
        <EditIconButton onClick={onDelete}>
          <svg>
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </EditIconButton>
      </IconsSection>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
