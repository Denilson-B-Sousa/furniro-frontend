import './App.css';

import { Footer, Header } from '@components/index';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div className='mobile:max-w-[100vw] overflow-x-hidden'>
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
