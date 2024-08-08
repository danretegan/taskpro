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
import { loadImage } from '../../assets/images/loadImage';
import { fetchColumns, createColumn } from '../../redux/slices/columnsSlice';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import sprite from '../../assets/icons/icons.svg';

const ProjectPage = () => {
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects.items);
  const selectedProject = projects.find(project => project._id === projectId);
  const { isOnMobile, isOnTablet, isOnDesktop } = useResponsive();
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [backgroundPath, setBackgroundPath] = useState(null);
  const columns = useSelector(state => state.columns.items);
  const dispatch = useDispatch();

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
                  <EditIconButton>
                    <svg>
                      <use href={`${sprite}#icon-pencil`}></use>
                    </svg>
                  </EditIconButton>
                  <EditIconButton>
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
        </>
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;
