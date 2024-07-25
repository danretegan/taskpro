import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Notification from './components/common/Notification/Notification';
import SharedLayout from './components/common/SharedLayout/SharedLayout';
import StyledNewBoard from './components/NewBoard/NewBoard.styled';
import StyledEditBoard from './components/EditBoard/EditBoard.styled';
import StyledAddColumn from './components/AddColumn/AddColumn.styled';
import StyledEditColumn from './components/EditColumn/EditColumn.styled';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.styled'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.styled'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.styled')
);

// todo: =>  restricted/private pages

const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/dashboard" element={<SharedLayout />}></Route>

          <Route path="/newboard" element={< StyledNewBoard/>}></Route>
          <Route path="/editboard" element={< StyledEditBoard/>}></Route>
          <Route path="/addcolumn" element={< StyledAddColumn/>}></Route>
          <Route path="/editcolumn" element={< StyledEditColumn/>}></Route>

        {/*<Route path="/marius1" element={</>}></Route>
        <Route path="/marius2" element={</>}></Route> */}
        </Routes>
      </Suspense>

      <Notification />
    </>
  );
};

export default App;
