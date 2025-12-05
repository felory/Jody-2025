import { Hello } from '@jody/ui';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import Users from './pages/User';
import Settings from './pages/Settings';
import Globe from './pages/Globe';

function App() {
  return (
    <>
      <Hello />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* 受保护的路由 */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout />
              </PrivateRoute>
            }
          ></Route>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="globe" element={<Globe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
