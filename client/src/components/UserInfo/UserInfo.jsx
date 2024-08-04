import { lazy, Suspense, useState } from 'react';
import icons from '../../assets//icons/icons.svg';
import useAuth from '../../hooks/useAuth';
import { createPortal } from 'react-dom';

const StyledEditProfileModal = lazy(() =>
  import('../EditProfileModal/EditProfileModal.styled')
);

const UserInfo = ({ className: styles }) => {
  const { user, theme } = useAuth();

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  return (
    <>
      <div className={styles}>
        <h3 title={user.name} className={`username ${theme}`}>
          {user.name}
        </h3>

        <button
          type="button"
          onClick={() => setIsEditProfileOpen(true)}
          className={`userPhoto ${theme}`}
        >
          {user.profilePhotoUrl ? (
            <img src={user.profilePhotoUrl} alt="profile" />
          ) : (
            <svg>
              <use
                href={
                  (theme === 'dark' ? `${icons}#icon-no-profile-dark` : '') ||
                  (theme === 'light' ? `${icons}#icon-no-profile-light` : '') ||
                  (theme === 'violet' ? `${icons}#icon-no-profile-violet` : '')
                }
              ></use>
            </svg>
          )}
        </button>
      </div>

      <Suspense>
        {isEditProfileOpen &&
          createPortal(
            <StyledEditProfileModal
              closeModal={() => setIsEditProfileOpen(false)}
            />,
            document.body
          )}
      </Suspense>
    </>
  );
};

export default UserInfo;
