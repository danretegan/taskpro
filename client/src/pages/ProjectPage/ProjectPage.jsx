import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import { ProjectPageContainer, AddColumnButton } from './ProjectPage.styled';
import StyledAddColumn from '../../components/AddColumn/AddColumn.styled';
import { loadImage } from '../../assets/images/loadImage';

const ProjectPage = () => {
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects.items);
  const selectedProject = projects.find(project => project._id === projectId);
  const { isOnMobile, isOnTablet, isOnDesktop } = useResponsive();
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const [backgroundPath, setBackgroundPath] = useState(null);

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
        const path = await loadImage(fileName, screenSize, isRetina);
        setBackgroundPath(path);
      }
    };
    fetchBackground();
  }, [selectedProject, screenSize, isRetina]);

  const handleOpenAddColumn = () => setIsAddColumnOpen(true);
  const handleCloseAddColumn = () => setIsAddColumnOpen(false);
  const handleCreateColumn = columnData => {
    console.log('New column created:', columnData);
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
        </>
      )}
    </ProjectPageContainer>
  );
};

export default ProjectPage;
