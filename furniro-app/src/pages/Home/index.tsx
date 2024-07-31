import { CarouselSection } from '@components/CarouselSection';
import { GallerySection } from '@components/GallerySection';
import { Gallery, Hero, Product } from '@components/index';

export function Home() {
   const handleShowMore = () => {
     window.location.href = '/shop'; // Navega para a página Shop
   };

  return (
    <main className='max-w-[100%]'>
      <Hero />
      <Gallery />
      <Product showMoreAction={handleShowMore} />
      <CarouselSection />
      <GallerySection />
    </main>
  );
}
