import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import StyledCloseButton from '../common/CloseButton/CloseButton.styled';
import {
  GreenButton,
  VioletButton,
} from '../common/FormButton/FormButton.styled';
import 'animate.css';

const LogoutModal = ({ className: styles, closeModal }) => {
  const { theme } = useAuth();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logout())
      .unwrap()
      .then(value => {
        toast.success(value.message);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
        const errorNotification =
          error?.response?.data?.message || 'Internal server error';
        toast.error(errorNotification);
      });
  };

  return (
    <div
      className={styles}
      onMouseDown={e => e.currentTarget === e.target && closeModal()}
    >
      <div
        className={`modalContent ${theme} animate__animated animate__zoomIn `}
      >
        <StyledCloseButton handlerFunction={() => closeModal()} />
        <p>Are you sure you want to exit ?</p>
        {theme === 'violet' ? (
          <VioletButton
            type={'button'}
            text={'Log out'}
            handlerFunction={handleExit}
          />
        ) : (
          <GreenButton
            type={'button'}
            text={'Log out'}
            handlerFunction={handleExit}
          />
        )}
      </div>
    </div>
  );
};

export default LogoutModal;
