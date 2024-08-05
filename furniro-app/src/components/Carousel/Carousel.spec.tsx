import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Carousel } from './index';

describe('Carousel Component', () => {
  test('renders Carousel component', () => {
    render(<Carousel />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(8);

    expect(images[0]).toHaveAttribute('alt', 'Image 1');
    expect(images[1]).toHaveAttribute('alt', 'Image 2');

    const textOverlay = screen.getByText('Inner Peace');
    expect(textOverlay).toBeInTheDocument();

    const carouselWrapper = screen.getByRole('group');
    expect(carouselWrapper).toHaveClass(
      'm-auto h-[36rem] w-[46rem] cursor-pointer',
    );
  });
});
