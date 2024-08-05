import { render, screen } from '@testing-library/react';

import { Footer } from './index';

describe('<Footer>', () => {
  test('should render footer component', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo'); 
    expect(footerElement).toBeInTheDocument();

    const titleElement = screen.getByText(/Furniro/i);
    expect(titleElement).toBeInTheDocument();

    const newsletterInput = screen.getByPlaceholderText(
      /Enter Your Email Address/i,
    );
    expect(newsletterInput).toBeInTheDocument();

    const subscribeButton = screen.getByRole('link', { name: /subscribe/i });
    expect(subscribeButton).toBeInTheDocument();
  });
});
