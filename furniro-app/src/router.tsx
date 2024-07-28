import { Contact, Home, Shop } from '@pages/index';
import { SingleProduct } from '@pages/SingleProduct';
import type { Router } from '@remix-run/router';
import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

export const router: Router = createBrowserRouter([
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
        element: <Shop />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'single-product',
        element: <SingleProduct/>
      }
    ],
  },
]);
