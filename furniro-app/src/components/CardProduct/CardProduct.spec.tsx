import { fireEvent, render, screen } from '@testing-library/react';
import { useCartDispatch } from 'store/hooks';
import { vi } from 'vitest';

import { CardProduct } from '../CardProduct/index';

// Mock useCartDispatch
vi.mock('store/hooks', () => ({
  useCartDispatch: vi.fn(),
}));

// Mock action addtocart
const mockDispatch = vi.fn();
(useCartDispatch as jest.Mock).mockReturnValue(mockDispatch);

describe('CardProduct', () => {
  const productProps = {
    id: '1',
    title: 'Product Title',
    shortDescription: 'Short Description for test',
    price: 1000,
    salesPrice: 800,
    imageUrl:
      'https://furnirobucket.s3.us-east-2.amazonaws.com/images/api-images/Compace-Escrivaninha-Studio-Carvalho-e-Preta-180-cm-3915-8279301-4.jpg',
  };

  test('renders correctly with given props', () => {
    render(<CardProduct {...productProps} />);

    expect(screen.getByText('Product Title')).toBeInTheDocument();
    expect(screen.getByText('Short Description for test')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 1\.000,00/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 800,00/)).toBeInTheDocument();

  });

  test('shows additional options on hover', () => {
    render(<CardProduct {...productProps} />);

    const productContainer = screen.getByRole('img', {
      name: /Product Title/,
    }).parentElement;

    if (productContainer) {
      fireEvent.mouseEnter(productContainer);
      expect(screen.getByText('Add to cart')).toBeInTheDocument();
      expect(screen.getByText('Share')).toBeInTheDocument();
      expect(screen.getByText('Compare')).toBeInTheDocument();
      expect(screen.getByText('Like')).toBeInTheDocument();
    } else {
      throw new Error('Product container not found');
    }
  });

  test('calls handleAddToCart on "Add to cart" button click', () => {
    render(<CardProduct {...productProps} />);

    const productImage = screen.getByAltText('Product Title');
    const productContainer = productImage.parentElement;

    if (productContainer) {
      fireEvent.mouseEnter(productContainer);
      fireEvent.click(screen.getByText('Add to cart'));

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'cart/addToCart',
        payload: {
          id: '1',
          title: 'Product Title',
          price: 1000,
          imageUrl:
            'https://furnirobucket.s3.us-east-2.amazonaws.com/images/api-images/Compace-Escrivaninha-Studio-Carvalho-e-Preta-180-cm-3915-8279301-4.jpg',
        },
      });
    } else {
      throw new Error('Product container not found');
    }
  });
});
