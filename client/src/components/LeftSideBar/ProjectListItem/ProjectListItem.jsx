import {
  EditIconButton,
  IconsSection,
  ProjectIcon,
  ProjectSectionButton,
  StyledProjectListItem,
} from './ProjectListItem.styled';
import icons from '../../../assets/icons/icons.svg';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../../../redux/projects/projectsSlice';

const ProjectListItem = ({ project, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDelete = () => {
    onDelete(project._id);
    handleCloseModal();
  };

  const handleProjectClick = () => {
    dispatch(setSelectedProject(project));
    console.log(`Project button clicked: ${project.title}`);
  };

  return (
    <StyledProjectListItem>
      <ProjectSectionButton onClick={handleProjectClick}>
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
        <EditIconButton onClick={handleOpenModal}>
          <svg>
            <use href={`${icons}#icon-trash`}></use>
          </svg>
        </EditIconButton>
      </IconsSection>
      {isModalOpen && (
        <ConfirmDeleteModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleDelete}
          projectName={project.title}
        />
      )}
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
