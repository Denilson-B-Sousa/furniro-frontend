// src/components/Hero/Hero.spec.tsx
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Hero } from './index';

describe('Hero Component', () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

  test('renders Hero component correctly', () => {
    renderComponent();

    expect(screen.getByText(/New Arrival/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Discover Our New Collection/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();

    expect(screen.getAllByRole('button', { name: /Buy Now/i })).toHaveLength(2);
  });
});
