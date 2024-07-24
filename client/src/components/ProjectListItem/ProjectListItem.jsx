import {
  EditIcon,
  IconsSection,
  ProjectIcon,
  ProjectSection,
  StyledProjectListItem,
} from './ProjectListItem.styled';
import icons from '../../assets/icons/icons.svg';

const ProjectListItem = ({ className: styles, project }) => {
  return (
    <StyledProjectListItem className={styles}>
      <ProjectSection>
        <ProjectIcon>
          <svg>
            <use href={`${icons}#icon-fourCircles`}></use>
          </svg>
        </ProjectIcon>
        {project.name}
      </ProjectSection>
      <IconsSection>
        <EditIcon>
          <svg>
            <use href={`${icons}#icon-pencil`}></use>
          </svg>
        </EditIcon>
        <EditIcon>
          <svg>
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </EditIcon>
      </IconsSection>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
