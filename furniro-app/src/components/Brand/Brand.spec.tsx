import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Brand } from './index';

describe('<Brand>', () => {
  test('Should render brand component', () => {
    const { getByTestId, getAllByAltText } = render(<Brand />);

    expect(getByTestId('brand-section')).toBeInTheDocument();

    const titles = screen.getAllByRole('heading');
    expect(titles.length).toBe(4);

    const descriptions = screen.getAllByText(
      /crafted from|Over 2 years|Order over 150 \$|Dedicated support/i,
    );
    expect(descriptions.length).toBe(4);

    const imageElements = getAllByAltText('');
    expect(imageElements.length).toBe(4);
  });
});
