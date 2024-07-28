import { Cart } from '@pages/Cart';
import { Contact, Home, Login, Shop } from '@pages/index';
import { Register } from '@pages/Register';
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
        path: 'cart',
        element: <Cart/>
      }
    
    ],
  },

  {
    path: 'auth',
    children:[
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  }
]);
