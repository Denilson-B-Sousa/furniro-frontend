import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Cart } from '@pages/Cart';
import { Checkout } from '@pages/Checkout';
import { Contact, Home, Login, Shop } from '@pages/index';
import { Register } from '@pages/Register';
import type { Router } from '@remix-run/router';
import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

import { Error } from './components/Error';

export const router: Router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'shop',
        element: <Shop />,
        errorElement: <Error />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <Error />,
      },
    ],
  },

  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);
