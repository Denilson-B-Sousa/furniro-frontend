import { render, screen } from '@testing-library/react';
import { useProductData } from 'hooks/product/useProductData';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import { store } from '../../store/store';
import { Product } from './index';

vi.mock('hooks/product/useProductData', () => ({
  useProductData: vi.fn(),
}));

const mockProductData = [
  {
    id: '1',
    title: 'Product 1',
    shortDescription: 'Description 1',
    price: 1000,
    salesPrice: 800,
    image: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    title: 'Product 2',
    shortDescription: 'Description 2',
    price: 1200,
    salesPrice: 900,
    image: 'https://example.com/image2.jpg',
  },
];

describe('Product', () => {
  test('display loading spinner when data is being fetched', () => {
    (useProductData as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<Product title='Our Products' currentPage={0} itemsPerPage={8} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays products correctly when data is fetched', async () => {
    (useProductData as jest.Mock).mockReturnValue({
      data: mockProductData,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Product title='Our Products' currentPage={0} itemsPerPage={8} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 1\.000,00/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 800,00/)).toBeInTheDocument();

    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 1\.200,00/)).toBeInTheDocument();
    expect(screen.getByText(/R\$ 900,00/)).toBeInTheDocument();
  });

  test('shows correct element layout', async () => {
    (useProductData as jest.Mock).mockReturnValue({
      data: mockProductData,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Product title='Our Products' currentPage={0} itemsPerPage={8} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Our Products')).toBeInTheDocument();

    const productElements = await screen.findAllByTestId('card-product');
    expect(productElements).toHaveLength(mockProductData.length);
  });
});
