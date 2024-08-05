import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Label } from './index';

describe('Label Component', () => {
  test('renders Label component with correct styles', () => {
    render(<Label htmlFor='test-id'>Test Label</Label>);

    const label = screen.getByText(/Test Label/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      'py-6 font-poppins text-xl font-medium text-black',
    );
    expect(label).toHaveAttribute('for', 'test-id');
  });

  test('renders Label component with additional props', () => {
    render(
      <Label htmlFor='additional-id' className='additional-class'>
        Additional Label
      </Label>,
    );

    const label = screen.getByText(/Additional Label/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      'py-6 font-poppins text-xl font-medium text-black additional-class',
    );
    expect(label).toHaveAttribute('for', 'additional-id');
  });
});
