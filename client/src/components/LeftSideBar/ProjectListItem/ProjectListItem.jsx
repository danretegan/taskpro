import {
  EditIconButton,
  IconsSection,
  ProjectIcon,
  ProjectSectionButton,
  StyledProjectListItem,
} from './ProjectListItem.styled';
import icons from '../../../assets/icons/icons.svg';
import { useNavigate } from 'react-router-dom';

const ProjectListItem = ({ className: styles, project }) => {
  const navigate = useNavigate();

  return (
    <StyledProjectListItem className={styles}>
      <ProjectSectionButton
        onClick={() => console.log('Project button clicked')}
      >
        <ProjectIcon>
          <svg>
            <use href={`${icons}#icon-fourCircles`}></use>
          </svg>
        </ProjectIcon>
        {project.name}
      </ProjectSectionButton>
      <IconsSection>
        <EditIconButton onClick={() => navigate('/editboard')}>
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
