import useAuth from '../../hooks/useAuth';
import icons from '../../assets/icons/icons.svg';
import { lazy, useState } from 'react';
import { createPortal } from 'react-dom';
import { Suspense } from 'react';

const StyledLogoutModal = lazy(() =>
  import('../LogoutModal/LogoutModal.styled')
);
const StyledLoadingScreen = lazy(() =>
  import('../../components/common/LoadingScreen/LoadingScreen.styled')
);

const LogoutBtn = ({ className: styles }) => {
  const { theme, isLoading } = useAuth();
  const [isLogoutModalOpen, setisLogoutModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${styles} ${theme}`}
        onClick={() => setisLogoutModalOpen(true)}
      >
        <svg>
          <use href={`${icons}#icon-logout`}></use>
        </svg>
        <span>Log out</span>
      </button>

      <Suspense>
        {isLogoutModalOpen &&
          createPortal(
            <StyledLogoutModal
              closeModal={() => setisLogoutModalOpen(false)}
            />,
            document.body
          )}
      </Suspense>

      <Suspense>
        {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
      </Suspense>
    </>
  );
};

export default LogoutBtn;
