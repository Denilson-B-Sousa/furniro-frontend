
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import { Header } from './index';

vi.mock('@components/Modal', () => ({
  Modal: () => <div data-testid='modal'>Modal Component</div>,
}));

vi.mock('@components/Navbar', () => ({
  Navbar: () => <nav data-testid='navbar'>Navbar Component</nav>,
}));

const mockImage = 'https://via.placeholder.com/50';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders the logo with correct alt text', () => {
    const logo = screen.getByAltText('Furniro Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', mockImage);
  });

  test('renders the Furniro link with correct text and href', () => {
    const furniroLink = screen.getByText('Furniro');
    expect(furniroLink).toBeInTheDocument();
    expect(furniroLink).toHaveAttribute('href', '/');
  });

  test('renders Navbar component', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('renders user icon with correct alt text', () => {
    const userIcon = screen.getByAltText('');
    expect(userIcon).toBeInTheDocument();
  });

  test('opens modal on cart icon click', () => {
    const cartIcon = screen.getByAltText('');
    fireEvent.click(cartIcon);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('renders the menu button on smaller screens', () => {
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });
});
