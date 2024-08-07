import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import { ProjectPageContainer, AddColumnButton } from './ProjectPage.styled';
import StyledAddColumn from '../../components/AddColumn/AddColumn.styled';
import { loadImage } from '../../assets/images/loadImage';
import { fetchColumns, createColumn } from '../../redux/slices/columnsSlice';

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

  const isRetina = window.devicePixelRatio > 1;

  useEffect(() => {
    const fetchBackground = async () => {
      if (selectedProject?.background) {
        const fileName = selectedProject.background
          .split('/')
          .pop()
          .replace('.png', '');
        try {
          const path = await loadImage(fileName, screenSize, isRetina);
          setBackgroundPath(path);
        } catch (error) {
          console.error(`Error loading image: ${fileName}, error`);
          setBackgroundPath(null);
        }
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
    dispatch(createColumn({ ...columnData, boardId: projectId }));
    handleCloseAddColumn();
  };

  return (
    <ProjectPageContainer
      $selectedProject={selectedProject}
      $background={backgroundPath}
    >
      {selectedProject && (
        <>
          <h1>{selectedProject.title}</h1>
          <AddColumnButton onClick={handleOpenAddColumn}>
            Add another column
          </AddColumnButton>
          {isAddColumnOpen && (
            <StyledAddColumn
              isOpen={isAddColumnOpen}
              onClose={handleCloseAddColumn}
              onCreate={handleCreateColumn}
            />
          )}
          <div>
            {columns.length === 0 ? (
              <p>No columns available. Add a new column to get started.</p>
            ) : (
              columns.map((column, index) => (
                <div key={index}>{column.title}</div>
              ))
            )}
          </div>
        </>
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;
