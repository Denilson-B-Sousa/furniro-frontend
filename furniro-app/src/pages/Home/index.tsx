import { CarouselSection } from '@components/CarouselSection';
import { GallerySection } from '@components/GallerySection';
import { Gallery, Hero, Product } from '@components/index';

export function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Product />
      <CarouselSection />
      <GallerySection/>
    </>
  );
}
