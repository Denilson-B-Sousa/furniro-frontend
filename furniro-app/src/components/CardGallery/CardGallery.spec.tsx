import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { CardGallery } from './index';

describe('CardGallery Component', () => {
  test('renders CardGallery component with title and image', () => {
    const title = 'Sample Title';
    const imageUrl = 'https://example.com/image.jpg';

    render(<CardGallery title={title} imageUrl={imageUrl} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', imageUrl);
    expect(image).toHaveAttribute('alt', '');

    const heading = screen.getByText(title);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      'py-8 text-center font-poppins text-xl font-semibold text-dark-gray-900',
    );
  });
});
