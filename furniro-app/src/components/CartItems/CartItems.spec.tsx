import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { removeFromCart } from 'store/cart-slice';
import { useCartDispatch, useCartSelector } from 'store/hooks';
import { vi } from 'vitest';

import { CartItems } from './CartItems';

vi.mock('store/hooks', () => ({
  useCartDispatch: vi.fn(),
  useCartSelector: vi.fn(),
}));

vi.mock('store/cart-slice', () => ({
  removeFromCart: vi.fn(),
}));

const mockDispatch = vi.fn();
(useCartDispatch as jest.Mock).mockReturnValue(mockDispatch);

describe('CartItems', () => {
  const mockCartItems = [
    {
      id: '1',
      title: 'Product 1',
      price: 1000,
      quantity: 1,
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      id: '2',
      title: 'Product 2',
      price: 1000,
      quantity: 2,
      imageUrl: 'https://example.com/image2.jpg',
    },
  ];

  beforeEach(() => {
    (useCartSelector as jest.Mock).mockReturnValue(mockCartItems);
  });

  test('renders cart items correctly', () => {
    render(
      <MemoryRouter>
        <CartItems />
      </MemoryRouter>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('1 X')).toBeInTheDocument();
    expect(screen.getByText('2 X')).toBeInTheDocument();
  });

  test('removes item from cart when "Remove" button is clicked', () => {
    render(
      <MemoryRouter>
        <CartItems />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(mockDispatch).toHaveBeenCalledWith(removeFromCart('1'));
  });

});
