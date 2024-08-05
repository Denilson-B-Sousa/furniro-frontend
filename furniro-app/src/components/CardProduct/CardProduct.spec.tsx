import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useCartDispatch, useProductDispatch } from 'store/hooks';
import { vi } from 'vitest';

import { CardProduct } from './index';

vi.mock('store/hooks', () => ({
  useCartDispatch: vi.fn(),
  useProductDispatch: vi.fn(),
}));

const mockCartDispatch = vi.fn();
const mockProductDispatch = vi.fn();
vi.mocked(useCartDispatch).mockReturnValue(mockCartDispatch);
vi.mocked(useProductDispatch).mockReturnValue(mockProductDispatch);

describe('CardProduct', () => {
  const productProps = {
    id: '1',
    title: 'Product Title',
    description: 'Short Description for test',
    price: 1000,
    salesPrice: 800,
    imageUrl:
      'https://furnirobucket.s3.us-east-2.amazonaws.com/images/api-images/Compace-Escrivaninha-Studio-Carvalho-e-Preta-180-cm-3915-8279301-4.jpg',
    rating: 4.5,
    sku: '12345',
    category: 'Category',
    tags: ['tag1', 'tag2'],
    colors: [
      { name: 'Red', hex: '#FF0000' },
      { name: 'Blue', hex: '#0000FF' },
    ],
    size: ['S', 'M'],
    images: { mainImage: '', gallery: [] },
  };

  test('renders correctly with given props', () => {
    render(<CardProduct {...productProps} />);

    expect(screen.getByText('Product Title')).toBeInTheDocument();
    expect(screen.getByText('Short Description for test')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 1\.000,00/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 800,00/)).toBeInTheDocument();
  });

  test('shows additional options on hover', () => {
    render(
      <MemoryRouter>
        <CardProduct {...productProps} />
      </MemoryRouter>,
    );

    const productImage = screen.getByAltText('Product Title');
    const productContainer = productImage.closest('div');

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

  test('calls handleAddToCart on "Add to cart" button click', async () => {
    render(
      <MemoryRouter>
        <CardProduct {...productProps} />
      </MemoryRouter>,
    );

    const productImage = screen.getByAltText('Product Title');
    const productContainer = productImage.closest('div');

    if (productContainer) {
      fireEvent.mouseEnter(productContainer);
      const addToCartButton = await screen.findByRole('button', {
        name: /Add to cart/i,
      });

      fireEvent.click(addToCartButton);

      expect(mockCartDispatch).toHaveBeenCalledWith({
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
