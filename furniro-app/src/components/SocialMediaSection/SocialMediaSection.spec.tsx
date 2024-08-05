import { render, screen } from '@testing-library/react';

import { SocialMediaSection } from './index'; // Ajuste o caminho conforme necessário

describe('SocialMediaSection', () => {
  test('renders social media icons correctly', () => {
    render(<SocialMediaSection />);

    expect(
      screen.getByAltText('Link rede social Facebook'),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('Link rede social instagram'),
    ).toBeInTheDocument();
    expect(screen.getByAltText('Link rede social twitter')).toBeInTheDocument();


    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
    links.forEach((link) => {
      const img = link.querySelector('img');
      expect(img).toBeInTheDocument();
    });
  });

  test('links have correct href attributes', () => {
    render(<SocialMediaSection />);

    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#');
    });
  });
});
