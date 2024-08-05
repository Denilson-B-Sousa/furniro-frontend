import { render, screen } from '@testing-library/react';
import React from 'react';

import { Input } from './index';

describe('Input', () => {
  test('renders input with default props', () => {
    render(<Input placeholder='Placeholder text' />);

    expect(screen.getByPlaceholderText('Placeholder text')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Placeholder text')).toHaveClass(
      'rounded-xl border-2 border-dark-gray-300 p-6 outline-dark-gray-900 mobile:w-80 tablet:w-[32rem]',
    );
  });

  test('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test('accepts other input props', () => {
    render(<Input type='password' aria-label='Password input' />);

    expect(screen.getByLabelText('Password input')).toHaveAttribute(
      'type',
      'password',
    );
  });
});
