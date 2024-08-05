import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';

import { GallerySection } from './index';

describe('GallerySection Component', () => {
  test('renders the heading and description text', () => {
    render(<GallerySection />);

    const descriptionText = screen.queryByText(/Share your setup with/i);
    expect(descriptionText).toBeInTheDocument();

    const headingText = screen.queryByText(/#FuniroFurniture/i);
    expect(headingText).toBeInTheDocument();
  });

  test('renders the gallery div with the correct class', () => {
    render(<GallerySection />);

    const galleryDiv = document.querySelector('.bg-gallery-pattern');
    expect(galleryDiv).toBeInTheDocument();
  });
});
