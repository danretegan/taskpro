import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
  selectTheme,
} from '../redux/auth/selectors';

const useAuth = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  return {
    isLoading,
    isLoggedIn,
    user,
    theme,
  };
};

export default useAuth;
