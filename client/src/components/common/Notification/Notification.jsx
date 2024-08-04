import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';

const Notification = () => {
  const { theme } = useAuth();

  return (
    <ToastContainer
      position="top-right"
      autoClose={2500}
      newestOnTop={false}
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover
      theme={theme === 'dark' ? 'dark' : 'light'}
      transition={Slide}
    />
  );
};

export default Notification;
