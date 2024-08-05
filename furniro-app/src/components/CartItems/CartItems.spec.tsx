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
vi.mocked(useCartDispatch).mockReturnValue(mockDispatch);

const mockCartItems = [
  {
    id: '1',
    title: 'Product1',
    price: 1000,
    quantity: 1,
    imageUrl: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    title: 'Product2',
    price: 1000,
    quantity: 2,
    imageUrl: 'https://example.com/image2.jpg',
  },
];

describe('CartItems', () => {
  beforeEach(() => {
    vi.mocked(useCartSelector).mockReturnValue(mockCartItems);
  });

  test('renders cart items correctly', async () => {
    render(
      <MemoryRouter>
        <CartItems />
      </MemoryRouter>,
    );

    expect(
      await screen.findByText((content) => content.startsWith('Product1')),
    ).toBeInTheDocument();
    expect(
      await screen.findByText((content) => content.startsWith('Product2')),
    ).toBeInTheDocument();
  });

  test('removes item from cart when "Remove" button is clicked', () => {
    render(
      <MemoryRouter>
        <CartItems />
      </MemoryRouter>,
    );

    const removeButtons = screen.getAllByRole('button');
    expect(removeButtons).toHaveLength(2);

    fireEvent.click(removeButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith(removeFromCart('1'));
  });
});
