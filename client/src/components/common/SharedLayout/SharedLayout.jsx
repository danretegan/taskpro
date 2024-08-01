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
import {
  SharedLayoutContainer,
  HeaderWrapper,
  ContentWrapper,
  StyledParagraph,
} from './SharedLayout.styled';

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const { isLoading } = useAuth();
  const { isOnDesktop } = useResponsive();

  return (
    <SharedLayoutContainer>
      <HeaderWrapper>
        <StyledHeader />

        {/* <Suspense>
  {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
</Suspense> */}
      </HeaderWrapper>
      {isOnDesktop && <StyledLeftSideBar />}
      <ContentWrapper>
        <StyledParagraph>
          Before starting your project, it is essential{' '}
          <span> to create a board </span> to visualize and track all the
          necessary tasks and milestones. This board serves as a powerful tool
          to organize the workflow and ensure effective collaboration among team
          members.
        </StyledParagraph>
      </ContentWrapper>
    </SharedLayoutContainer>
  );
};

export default SharedLayout;
