import StyledProjectItem from '../ProjectItem/ProjectItem.styled';

const ProjectsList = ({ className: styles, closeBurgerMenu }) => {
  const projects = [
    { name: 'Project 1', icon: 'icon-puzzlePiece', id: 1 },
    { name: 'Project 2', icon: 'icon-puzzlePiece', id: 2 },
    { name: 'Project 3', icon: 'icon-puzzlePiece', id: 3 },
    { name: 'Project 4', icon: 'icon-puzzlePiece', id: 4 },
  ];

  return (
    <div className={`${styles} list`}>
      {projects.map(item => (
        <StyledProjectItem
          key={item.id}
          project={item}
          closeBurgerMenu={closeBurgerMenu}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
