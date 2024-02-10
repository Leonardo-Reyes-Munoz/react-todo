import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Home from './components/Home/Home';
import App from './App';
import ErrorPage from './routes/error-page/error-page';
import RequireAuth from './components/RequireAuth/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
  },
]);

export default router;
