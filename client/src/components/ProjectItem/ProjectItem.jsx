import icons from '../../assets/icons/icons.svg';
import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
import { NavLink, useLocation } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import trash from 'react-useanimations/lib/trash';

const ProjectItem = ({ className: styles, project, closeBurgerMenu }) => {
  const { theme } = useAuth();
  const { isOnMobile, isOnTablet } = useResponsive();

  const location = useLocation();

  return (
    <div className={styles}>
      <NavLink
        to={`${project.id}`}
        className={theme}
        onClick={() => (isOnMobile || isOnTablet) && closeBurgerMenu()}
      >
        <svg>
          <use href={`${icons}#${project.icon}`}></use>
        </svg>
        <span>{project.name}</span>
      </NavLink>

      {location.pathname === `/dashboard/${project.id}` ? (
        <div className={`actionIcons ${theme}`}>
          {/* todo: => modalul de edit */}
          <svg onClick={() => console.log('modalul de edit')}>
            <use href={`${icons}#icon-pencil`}></use>
          </svg>

          <UseAnimations
            animation={trash}
            size={23}
            strokeColor="currentColor"
            // todo: => modalul de sters
            onClick={() => console.log('modalul de sters')}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ProjectItem;
