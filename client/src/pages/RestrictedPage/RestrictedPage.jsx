import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RestrictedPage = ({ page: Component }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={"/diary"} /> : <Component />;
};

export default RestrictedPage;
