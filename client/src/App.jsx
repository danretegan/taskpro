import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Notification from './components/common/Notification/Notification';
import SharedLayout from './components/common/SharedLayout/SharedLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import ProjectPage from './pages/ProjectPage/ProjectPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.styled'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.styled'));
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage/RegisterPage.styled')
);

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<SharedLayout />}>
            <Route index element={<Dashboard />} />
            <Route path=":projectId" element={<ProjectPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Notification />
    </>
  );
};

export default App;
