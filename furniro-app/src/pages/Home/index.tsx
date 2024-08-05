import { CarouselSection } from '@components/CarouselSection';
import { GallerySection } from '@components/GallerySection';
import { Button, Gallery, Hero, Product } from '@components/index';
import { NavLink, useNavigate } from 'react-router-dom';

export function Home() {


    const navigate = useNavigate();


   const handleClick = (
     event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
   ) => {
     event.preventDefault();
     window.scrollTo(0, 0); 
     navigate('/shop');
   };
   
  return (
    <main className='max-w-[100%] m-auto'>
      <Hero />
      <Gallery />
      <Product
        title='Our Products'
        currentPage={1}
        itemsPerPage={8}
      />
      <NavLink
        to='shop'
        className='flex justify-center py-12'
        onClick={handleClick}
      >
        <Button variant='outlined' size='xl'>
          Show More
        </Button>
      </NavLink>
      <CarouselSection />
      <GallerySection />
    </main>
  );
}
