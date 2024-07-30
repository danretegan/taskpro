import {
  EditIconButton,
  IconsSection,
  ProjectIcon,
  ProjectSectionButton,
  StyledProjectListItem,
} from './ProjectListItem.styled';
import icons from '../../../assets/icons/icons.svg';

const ProjectListItem = ({ project }) => {
  return (
    <StyledProjectListItem>
      <ProjectSectionButton
        onClick={() => console.log('Project button clicked')}
      >
        <ProjectIcon>
          <svg>
            <use href={`${icons}#icon-fourCircles`}></use>
          </svg>
        </ProjectIcon>
        {project.title}
      </ProjectSectionButton>
      <IconsSection>
        <EditIconButton onClick={() => console.log('Edit button clicked')}>
          <svg>
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </EditIconButton>
        <EditIconButton onClick={() => console.log('Delete button clicked')}>
          <svg>
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </EditIconButton>
      </IconsSection>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
