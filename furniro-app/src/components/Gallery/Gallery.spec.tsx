import { render, screen } from '@testing-library/react';
import { useGalleryData } from 'hooks/gallery/useGalleryData'
import { vi } from 'vitest';

import { Gallery } from './index';

vi.mock('hooks/gallery/useGalleryData', () => ({
  useGalleryData: vi.fn(),
}));

const mockData = [
  { id: '1', title: 'Gallery Item 1', imageUrl: '/path/to/image1.jpg' },
  { id: '2', title: 'Gallery Item 2', imageUrl: '/path/to/image2.jpg' },
  { id: '3', title: 'Gallery Item 3', imageUrl: '/path/to/image2.jpg' }
];

describe('Gallery Component', () => {
  test('renders the loading spinner when isLoading is true', () => {
    (useGalleryData as jest.Mock).mockReturnValue({ data: [], isLoading: true});

    render(<Gallery/>)

    expect(screen.getByRole('status')).toBeInTheDocument();
  })

  test('renders the gallery items when data is loaded', () => {
    (useGalleryData as jest.Mock).mockReturnValue({ data: mockData, isLoading: false});

    render(<Gallery/>);

    mockData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    })
  })

  test('renders the heading and description text', () => {
    (useGalleryData as jest.Mock).mockReturnValue({ data: [], isLoading: false});

    render(<Gallery/>);

    screen.debug()

     expect(
       screen.getByText((content, element) => {
         return (
           element !== null &&
           element.tagName.toLowerCase() === 'h2' &&
           /browse the range/i.test(content)
         );
       }),
     ).toBeInTheDocument();

     expect(
       screen.getByText((content, element) => {
         return (
           element !== null &&
           element.tagName.toLowerCase() === 'p' &&
           /Lorem ipsum dolor sit amet, consectetur adipiscing elit./i.test(
             content,
           )
         );
       }),
     ).toBeInTheDocument();
  })
})