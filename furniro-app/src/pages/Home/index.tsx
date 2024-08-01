import { CarouselSection } from '@components/CarouselSection';
import { GallerySection } from '@components/GallerySection';
import { Button, Gallery, Hero, Product } from '@components/index';
import { NavLink } from 'react-router-dom';

export function Home() {
   
  return (
    <main className='max-w-[100%]'>
      <Hero />
      <Gallery />
      <Product/>
      <NavLink to='shop' className='flex justify-center py-12'>
        <Button variant='outlined' size='xl'>
          Show More
        </Button>
      </NavLink>
      <CarouselSection />
      <GallerySection />
    </main>
  );
}
