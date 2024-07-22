import Select from 'react-select';
import { setTheme } from '../../redux/auth/slice';
import { useDispatch } from 'react-redux';

const ThemeDropdown = ({ className: styles }) => {
  const dispatch = useDispatch();

  const ThemeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'violet', label: 'Violet' },
  ];

  return (
    <div>
      <Select
        isSearchable={false}
        placeholder="Theme"
        className="react-select-container"
        classNamePrefix="react-select"
        options={ThemeOptions}
        value={'Theme'}
        onChange={selectedOption => dispatch(setTheme(selectedOption.value))}
      />
    </div>
  );
};

export default ThemeDropdown;
