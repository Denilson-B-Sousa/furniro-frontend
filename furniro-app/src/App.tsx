import './App.css';

import { Footer, Header } from '@components/index';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { store } from 'store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
