import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Cart } from '@pages/Cart';
import { Checkout } from '@pages/Checkout';
import { Contact, Home, Login, Shop } from '@pages/index';
import { Register } from '@pages/Register';
import { SingleProduct } from '@pages/SingleProduct';
import type { Router } from '@remix-run/router';
import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

export const router: Router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: 'checkout',
        element: <Checkout />,
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
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <SingleProduct />,
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
