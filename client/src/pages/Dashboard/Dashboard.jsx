import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useResponsive from '../../hooks/useResponsive';
import {
  DashboardContainer,
  StyledParagraph,
  AddColumnButton,
} from './Dashboard.styled';
import AddColumn from '../../components/AddColumn/AddColumn.styled';
import { loadImage } from '../../assets/images/loadImage';

const Dashboard = () => {
  const selectedProject = useSelector(state => state.projects.selectedProject);
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
    <DashboardContainer
      $selectedProject={selectedProject}
      $background={backgroundPath}
    >
      {selectedProject ? (
        <>
          <StyledParagraph $selectedProject={selectedProject}>
            {selectedProject.title}
          </StyledParagraph>
          <AddColumnButton onClick={handleOpenAddColumn}>
            Add another column
          </AddColumnButton>
          {isAddColumnOpen && (
            <AddColumn
              isOpen={isAddColumnOpen}
              onClose={handleCloseAddColumn}
              onCreate={handleCreateColumn}
            />
          )}
        </>
      ) : (
        <StyledParagraph>
          Before starting your project, it is essential{' '}
          <span> to create a board </span> to visualize and track all the
          necessary tasks and milestones. This board serves as a powerful tool
          to organize the workflow and ensure effective collaboration among team
          members.
        </StyledParagraph>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
