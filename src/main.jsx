import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Home from './components/Home/Home';
import App from './App';
import ErrorPage from './routes/error-page/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <App />,
  },
]);

export default router;
