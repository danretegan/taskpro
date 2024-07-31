import { useDispatch } from 'react-redux';
import {
  EditIconButton,
  IconsSection,
  ProjectIcon,
  ProjectSectionButton,
  StyledProjectListItem,
} from './ProjectListItem.styled';
import icons from '../../../assets/icons/icons.svg';
import { deleteProject } from '../../../redux/projects/projectsSlice';

const ProjectListItem = ({ project, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (projectId) => {
    dispatch(deleteProject(projectId))
      .unwrap()
      .then(() => {
        console.log('Project deleted:', projectId);
      })
      .catch((error) => {
        console.error('Failed to delete project:', error);
      });
  };

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
        <EditIconButton onClick={() => handleDelete(project._id)}>
          <svg>
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </EditIconButton>
      </IconsSection>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
