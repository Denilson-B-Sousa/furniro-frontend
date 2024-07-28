import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Banner } from './index';

const title = 'Title';
const link = 'link';
const uri = 'uri';

describe('<Banner>', () => {

  test('Should render banner component with props', () => {
    render(
      <MemoryRouter>
        <Banner link={link} title={title} uri={uri} />
      </MemoryRouter>,
    );

    const bannerTitle = screen.getByRole('heading', { level: 1 });
    expect(bannerTitle).toBeInTheDocument();
    expect(bannerTitle).toHaveTextContent(title);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');


    const bannerLink = screen.getByText(link);
    expect(bannerLink).toBeInTheDocument();
    expect(bannerLink).toHaveAttribute('href', `/${uri}`);
  });
});
