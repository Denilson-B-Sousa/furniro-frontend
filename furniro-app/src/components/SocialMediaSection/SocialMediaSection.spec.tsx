import { render, screen } from '@testing-library/react';

import { SocialMediaSection } from './index'; // Ajuste o caminho conforme necessário

describe('SocialMediaSection', () => {
  test('renders social media icons correctly', () => {
    render(<SocialMediaSection />);

    expect(
      screen.getByAltText(
        'Fundo branco com a letra F representando a logo da rede social Facebook',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        'Fundo branco com uma camera representando a logo da rede social Instagram',
      ),
    ).toBeInTheDocument();
    expect(screen.getByAltText('fundo')).toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument();

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
