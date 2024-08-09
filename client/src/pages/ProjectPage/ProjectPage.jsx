import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import {
  ProjectPageContainer,
  ColumnsContainer,
  Column,
  CustomButton,
  IconsSection,
  EditIconButton,
} from './ProjectPage.styled';
import StyledAddColumn from '../../components/AddColumn/AddColumn.styled';
import StyledEditColumn from '../../components/EditColumn/EditColumn.styled';
import ConfirmModal from '../../components/common/ConfirmModal/ConfirmModal';
import { loadImage } from '../../assets/images/loadImage';
import { fetchColumns, createColumn } from '../../redux/slices/columnsSlice';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import sprite from '../../assets/icons/icons.svg';

import { deleteColumn } from '../../redux/slices/columnsSlice';

const ProjectPage = () => {
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects.items);
  const selectedProject = projects.find(project => project._id === projectId);
  const { isOnMobile, isOnTablet, isOnDesktop } = useResponsive();
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [isEditColumnOpen, setIsEditColumnOpen] = useState(false);
  const [currentColumnTitle, setCurrentColumnTitle] = useState('');
  const [backgroundPath, setBackgroundPath] = useState(null);
  const columns = useSelector(state => state.columns.items);
  const dispatch = useDispatch();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [columnToDelete, setColumnToDelete] = useState(null);

  let screenSize;
  if (isOnDesktop) screenSize = 'desktop';
  else if (isOnTablet) screenSize = 'tablet';
  else if (isOnMobile) screenSize = 'mobile';

  if (!screenSize) screenSize = 'desktop';

  const isRetina = window.devicePixelRatio > 1;

  useEffect(() => {
    const fetchBackground = async () => {
      if (selectedProject?.background) {
        const fileName = selectedProject.background
          .split('/')
          .pop()
          .replace('.png', '')
          .replace('.jpg', '');
        try {
          const path = await loadImage(fileName, screenSize, isRetina);
          setBackgroundPath(path);
        } catch (error) {
          console.error(`Error loading image: ${fileName}`, error);
          setBackgroundPath(null);
        }
      } else {
        setBackgroundPath(null);
      }
    };
    fetchBackground();
  }, [selectedProject, screenSize, isRetina]);

  useEffect(() => {
    if (projectId) {
      dispatch(fetchColumns(projectId));
    }
  }, [projectId, dispatch]);

  const handleOpenAddColumn = () => setIsAddColumnOpen(true);
  const handleCloseAddColumn = () => setIsAddColumnOpen(false);
  const handleCreateColumn = async columnData => {
    const resultAction = await dispatch(
      createColumn({ ...columnData, boardId: projectId })
    );
    if (createColumn.fulfilled.match(resultAction)) {
      dispatch(fetchColumns(projectId));
    }
    handleCloseAddColumn();
  };

  const handleOpenEditColumn = title => {
    setCurrentColumnTitle(title);
    setIsEditColumnOpen(true);
  };
  const handleCloseEditColumn = () => setIsEditColumnOpen(false);

  const handleEditClick = title => {
    console.log('Edit button clicked');
    handleOpenEditColumn(title);
  };

  const handleOpenConfirmModal = column => {
    setColumnToDelete(column);
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    setColumnToDelete(null);
    setIsConfirmModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (columnToDelete) {
      await dispatch(
        deleteColumn({ boardId: projectId, columnTitle: columnToDelete.title })
      );
      handleCloseConfirmModal();
    }
  };

  return (
    <ProjectPageContainer
      $selectedProject={selectedProject}
      $background={backgroundPath}
      $hasBackground={!!backgroundPath}
    >
      {selectedProject && (
        <>
          <HeaderDashboard title={selectedProject.title} />
          <ColumnsContainer>
            {columns.map((column, index) => (
              <Column key={index}>
                <h2>{column.title}</h2>

                <IconsSection>
                  <EditIconButton onClick={() => handleEditClick(column.title)}>
                    <svg>
                      <use href={`${sprite}#icon-pencil`}></use>
                    </svg>
                  </EditIconButton>
                  <EditIconButton
                    onClick={() => handleOpenConfirmModal(column)}
                  >
                    <svg>
                      <use href={`${sprite}#icon-trash`}></use>
                    </svg>
                  </EditIconButton>
                </IconsSection>

                {/* Aici adăugăm conținutul coloanei, cum ar fi cardurile */}
              </Column>
            ))}

            <CustomButton onClick={handleOpenAddColumn}>
              <>
                <span className="plus-icon">
                  <svg width="28" height="28">
                    <use href={`${sprite}#icon-plus`}></use>
                  </svg>
                </span>
                Add another column
              </>
            </CustomButton>
          </ColumnsContainer>

          {isAddColumnOpen && (
            <StyledAddColumn
              isOpen={isAddColumnOpen}
              onClose={handleCloseAddColumn}
              onCreate={handleCreateColumn}
            />
          )}

          {isEditColumnOpen && (
            <StyledEditColumn
              isOpen={isEditColumnOpen}
              onClose={handleCloseEditColumn}
              initialTitle={currentColumnTitle}
              onCreate={handleCreateColumn}
            />
          )}

          {isConfirmModalOpen && (
            <ConfirmModal
              isOpen={isConfirmModalOpen}
              onClose={handleCloseConfirmModal}
              onConfirm={handleConfirmDelete}
              title="Confirm Deletion"
              message={`Are you sure you want to delete the column "${columnToDelete?.title}"?`}
              confirmText="Delete"
              cancelText="Cancel"
            />
          )}
        </>
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;
