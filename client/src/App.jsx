import { Routes, Route } from 'react-router-dom';

import StyledHomePage from './pages/HomePage/HomePage.styled';
import StyledRegisterPage from './pages/RegisterPage/RegisterPage.styled';
import StyledLoginPage from './pages/LoginPage/LoginPage.styled';
import Notification from './components/common/Notification/Notification';

// todo: => Importuri lazy, restricted/private pages

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledHomePage />} />
        <Route path="/register" element={<StyledRegisterPage />} />
        <Route path="/login" element={<StyledLoginPage />} />
      </Routes>

      <Notification />
    </>
  );
};

export default App;
