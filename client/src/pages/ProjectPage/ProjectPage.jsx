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
  CardsContainer,
} from './ProjectPage.styled';
import StyledAddColumn from '../../components/AddColumn/AddColumn.styled';
import StyledEditColumn from '../../components/EditColumn/EditColumn.styled';
import ConfirmModal from '../../components/common/ConfirmModal/ConfirmModal';
import { fetchColumns, createColumn } from '../../redux/slices/columnsSlice';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import sprite from '../../assets/icons/icons.svg';
import { updateColumn } from '../../redux/slices/columnsSlice';
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

  useEffect(() => {
    if (selectedProject?.background) {
      let folder = 'desktop';
      if (isOnTablet) folder = 'tablet';
      if (isOnMobile) folder = 'mobile';

      // Înlocuim orice referință la .png cu .jpg
      const fileName = selectedProject.background
        .split('/')
        .pop()
        .replace('.png', '.jpg');
      const path = `/images/${folder}/${fileName}`;
      setBackgroundPath(path);
    } else {
      setBackgroundPath(null);
    }
  }, [selectedProject, isOnDesktop, isOnTablet, isOnMobile]);

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

  const handleUpdateColumn = async values => {
    await dispatch(
      updateColumn({
        boardId: projectId,
        columnTitle: currentColumnTitle,
        newTitle: values.title,
      })
    );
    handleCloseEditColumn();
  };

  const handleConfirmDelete = async () => {
    if (columnToDelete) {
      await dispatch(
        deleteColumn({ boardId: projectId, columnTitle: columnToDelete.title })
      );
      handleCloseConfirmModal();
    }
  };

  const handleAddCard = columnId => {
    // Logica pentru a adăuga un card în coloana respectivă
    console.log(`Add card to column with ID: ${columnId}`);
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
              <div key={index}>
                <Column>
                  <div className="column-header">
                    <h2>{column.title}</h2>

                    <IconsSection>
                      <EditIconButton
                        onClick={() => handleEditClick(column.title)}
                      >
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
                  </div>

                  {/* Aici pot fi cardurile */}
                  <CardsContainer></CardsContainer>
                </Column>

                {/* Buton pentru a adăuga un card */}
                <CustomButton onClick={() => handleAddCard(column._id)}>
                  <svg width="28" height="28">
                    <use href={`${sprite}#icon-plus`}></use>
                  </svg>
                  Add another card
                </CustomButton>
              </div>
            ))}

            {/* Buton pentru a adăuga o nouă coloană */}
            <CustomButton onClick={handleOpenAddColumn}>
              <span className="plus-icon">
                <svg width="28" height="28">
                  <use href={`${sprite}#icon-plus`}></use>
                </svg>
              </span>
              Add another column
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
              onCreate={handleUpdateColumn}
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
