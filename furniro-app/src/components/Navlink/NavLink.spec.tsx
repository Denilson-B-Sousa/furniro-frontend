import { render, screen } from '@testing-library/react';

import { NavLink } from './index';

describe('NavLink', () => {
  test('renders with provided children', () => {
    render(<NavLink href='#'>Test Link</NavLink>);
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  test('applies provided href attribute', () => {
    render(<NavLink href='https://example.com'>Example Link</NavLink>);
    const linkElement = screen.getByText('Example Link') as HTMLAnchorElement;
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  test('applies additional class names', () => {
    render(
      <NavLink href='#' className='additional-class'>
        Styled Link
      </NavLink>,
    );
    const linkElement = screen.getByText('Styled Link');
    expect(linkElement).toHaveClass('additional-class');
  });
});
