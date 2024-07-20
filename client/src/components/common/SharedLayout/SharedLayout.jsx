import { lazy, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";

import StyledHeader from "../../Header/Header.styled";
import Notification from "../Notification/Notification";
import { refreshUser } from "../../../redux/auth/operations";
import useAuth from "../../../hooks/useAuth";

const StyledLoadingScreen = lazy(() =>
  import("../LoadingScreen/LoadingScreen.styled")
);

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isLoading } = useAuth();

  return (
    <>
      <StyledHeader />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Notification />

      <Suspense>
        {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
      </Suspense>
    </>
  );
};

export default SharedLayout;
