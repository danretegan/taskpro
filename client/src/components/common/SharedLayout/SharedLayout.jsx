import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StyledHeader from '../../Header/Header.styled';
import { refreshUser } from '../../../redux/auth/operations';
// import useAuth from '../../../hooks/useAuth';
import useResponsive from '../../../hooks/useResponsive';
import StyledLeftSideBar from '../../LeftSideBar/LeftSideBar.styled';

// const StyledLoadingScreen = lazy(() =>
//   import('../LoadingScreen/LoadingScreen.styled')
// );

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const { isLoading } = useAuth();
  const { isOnDesktop } = useResponsive();

  return (
    <>
      {isOnDesktop && <StyledLeftSideBar />}
      <StyledHeader />

      {/* <Suspense>
        {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
      </Suspense> */}
    </>
  );
};

export default SharedLayout;
