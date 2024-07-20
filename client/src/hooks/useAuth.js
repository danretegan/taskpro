import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from "../redux/auth/selectors";

const useAuth = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoading,
    isLoggedIn,
    user,
  };
};

export default useAuth;
