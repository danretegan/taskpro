import { Routes, Route } from 'react-router-dom';

import StyledHomePage from './pages/HomePage/HomePage.styled';
import StyledRegisterPage from './pages/RegisterPage/RegisterPage.styled';
import StyledLoginPage from './pages/LoginPage/LoginPage.styled';
import Notification from './components/common/Notification/Notification';
import SharedLayout from './components/common/SharedLayout/SharedLayout';

// todo: => Importuri lazy, restricted/private pages

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StyledHomePage />} />
        <Route path="/register" element={<StyledRegisterPage />} />
        <Route path="/login" element={<StyledLoginPage />} />

        <Route path="/dashboard" element={<SharedLayout />}></Route>

        {/* <Route path="/cristina1" element={< />}></Route>
        <Route path="/cristina2" element={< />}></Route>

        <Route path="/marius1" element={</>}></Route>
        <Route path="/marius2" element={</>}></Route> */}
      </Routes>

      <Notification />
    </>
  );
};

export default App;
