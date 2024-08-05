import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Filter } from './index';

jest.mock('hooks/product/useProductData', () => ({
  useProductData: jest.fn().mockReturnValue({
    data: [{ id: 1 }, { id: 2 }, { id: 3 }],
  }),
}));

describe('Filter Component', () => {
  const setNameFilter = jest.fn();
  const setPriceFilter = jest.fn();
  const setColorFilter = jest.fn();
  const setCategoryFilter = jest.fn();
  const visibleProductCount = 3;

  const renderComponent = () =>
    render(
      <Router>
        <Filter
          setNameFilter={setNameFilter}
          setPriceFilter={setPriceFilter}
          setColorFilter={setColorFilter}
          setCategoryFilter={setCategoryFilter}
          visibleProductCount={visibleProductCount} // Adicionado aqui
          itemsPerPage={16}
        />
      </Router>,
    );

  test('renders Filter component correctly', () => {
    renderComponent();

    expect(screen.getByText(/Filters/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Colors/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Show/i)).toBeInTheDocument();
    expect(screen.getByText(/Sort By/i)).toBeInTheDocument();
  });

  test('filters work correctly', () => {
    renderComponent();

    const priceInput = screen.getByLabelText(/Price/i);
    fireEvent.change(priceInput, { target: { value: '1000' } });
    expect(setPriceFilter).toHaveBeenCalledWith('1000');

    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'Chair' } });
    expect(setNameFilter).toHaveBeenCalledWith('Chair');

    const colorInputs = screen.getAllByRole('radio');
    fireEvent.click(colorInputs[0]);
    expect(setColorFilter).toHaveBeenCalledWith('black');

    const sofaButton = screen.getByText(/Sofá/i);
    fireEvent.click(sofaButton);
    expect(setCategoryFilter).toHaveBeenCalledWith('Sofás');

    const clearFiltersButton = screen.getByText(/Clear all filters/i);
    fireEvent.click(clearFiltersButton);
    expect(setPriceFilter).toHaveBeenCalledWith('');
    expect(setNameFilter).toHaveBeenCalledWith('');
    expect(setColorFilter).toHaveBeenCalledWith('');
    expect(setCategoryFilter).toHaveBeenCalledWith('');
  });
});
