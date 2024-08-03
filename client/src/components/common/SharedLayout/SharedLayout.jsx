import { Suspense } from 'react';
import StyledHeader from '../../Header/Header.styled';
import useResponsive from '../../../hooks/useResponsive';
import StyledLeftSideBar from '../../LeftSideBar/LeftSideBar.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const { isOnDesktop } = useResponsive();

  return (
    <>
      {isOnDesktop && <StyledLeftSideBar />}
      <StyledHeader />

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
