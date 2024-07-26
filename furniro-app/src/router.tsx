import { Home } from '@pages/index';
import { Shop } from '@pages/Shop';
import type { Router } from '@remix-run/router';
import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

export const router : Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop/>
      }
    ],
  },
]);
