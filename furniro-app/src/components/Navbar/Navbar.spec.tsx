import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Navbar } from './index';

describe('Navbar', () => {
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

     expect(screen.getByText('Home')).toBeInTheDocument();
     expect(screen.getByText('Shop')).toBeInTheDocument();
     expect(screen.getByText('About')).toBeInTheDocument();
     expect(screen.getByText('Contact')).toBeInTheDocument();

      expect(screen.getByText('Home').closest('a')).toHaveAttribute(
      'href',
       '/'
      );

      expect(screen.getByText('Shop').closest('a')).toHaveAttribute(
       'href',
       '/shop',
      );

      expect(screen.getByText('About').closest('a')).toHaveAttribute(
       'href',
       '/about',
      );

      expect(screen.getByText('Contact').closest('a')).toHaveAttribute(
       'href',
       '/contact',
     );
  });
});
