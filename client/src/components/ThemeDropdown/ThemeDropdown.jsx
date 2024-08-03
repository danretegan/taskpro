import { useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/auth/operations';

import icons from '../../assets//icons/icons.svg';
import { PopupMenu } from 'react-simple-widgets';
import useAuth from '../../hooks/useAuth';

const ThemeDropdown = ({ className: styles }) => {
  const dispatch = useDispatch();
  const { theme } = useAuth();

  return (
    <div className={styles}>
      <PopupMenu>
        <button type="button" className={`chooseThemeBtn ${theme}`}>
          <span>Theme</span>
          <svg width="16" height="16">
            <use href={`${icons}#icon-dropDown`}></use>
          </svg>
        </button>

        <div className={`dropdownOptions ${theme}`}>
          <button type="button" onClick={() => dispatch(updateTheme('light'))}>
            Light
          </button>
          <button type="button" onClick={() => dispatch(updateTheme('dark'))}>
            Dark
          </button>
          <button type="button" onClick={() => dispatch(updateTheme('violet'))}>
            Violet
          </button>
        </div>
      </PopupMenu>
    </div>
  );
};

export default ThemeDropdown;
