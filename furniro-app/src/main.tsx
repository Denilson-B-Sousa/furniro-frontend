import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserAuthProvider } from 'context/userAuthContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router.tsx';
import { store } from 'store/store';

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserAuthProvider>
          <RouterProvider router={router} />
        </UserAuthProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
