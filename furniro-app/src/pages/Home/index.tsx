import { CarouselSection } from '@components/CarouselSection';
import { GallerySection } from '@components/GallerySection';
import { Gallery, Hero, Product } from '@components/index';

export function Home() {
   const handleShowMore = () => {
     window.location.href = '/shop'; // Navega para a página Shop
   };

  return (
    <>
      <Hero />
      <Gallery />
      <Product showMoreAction={handleShowMore} />
      <CarouselSection />
      <GallerySection />
    </>
  );
}
