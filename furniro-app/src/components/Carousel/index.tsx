import '@splidejs/react-splide/css';
import './carousel.css';

import imageCarousel from '@assets/images/image-1.png';
import imageCarousel2 from '@assets/images/image-2.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export function Carousel() {
  return (
    <div className='m-auto h-[36rem] w-[46rem] cursor-pointer'>
      <Splide
        aria-label='My Favorite Images'
        options={{
          type: 'loop',
          perPage: 2,
          speed: 500,
          autoplay: true,
          pagination: true,
          arrows: false,
          gap: '1.5rem',
        }}
      >
        <SplideSlide>
          <div className='relative'>
            <img src={imageCarousel2} alt='Image 1' className='h-auto w-full' />
            <div className='absolute bottom-5 left-5 bg-white bg-opacity-70 p-8'>
              <p className='text-dark-gray-500'>01 —— Bed Room</p>
              <h2 className='font-poppins text-3xl font-semibold text-dark-gray-800'>
                Inner Peace
              </h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={imageCarousel} alt='Image 2' />
        </SplideSlide>
        <SplideSlide>
          <div className='relative'>
            <img src={imageCarousel2} alt='Image 1' className='h-auto w-full' />
            <div className='absolute bottom-5 left-5 bg-white bg-opacity-70 p-8'>
              <p className='text-dark-gray-500'>01 —— Bed Room</p>
              <h2 className='font-poppins text-3xl font-semibold text-dark-gray-800'>
                Inner Peace
              </h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={imageCarousel} alt='Image 2' />
        </SplideSlide>
        <SplideSlide>
          <div className='relative'>
            <img src={imageCarousel2} alt='Image 1' className='h-auto w-full' />
            <div className='absolute bottom-5 left-5 bg-white bg-opacity-70 p-8'>
              <p className='text-dark-gray-500'>01 —— Bed Room</p>
              <h2 className='font-poppins text-3xl font-semibold text-dark-gray-800'>
                Inner Peace
              </h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={imageCarousel} alt='Image 2' />
        </SplideSlide>
        <SplideSlide>
          <div className='relative'>
            <img src={imageCarousel2} alt='Image 1' className='h-auto w-full' />
            <div className='absolute bottom-5 left-5 bg-white bg-opacity-70 p-8'>
              <p className='text-dark-gray-500'>01 —— Bed Room</p>
              <h2 className='font-poppins text-3xl font-semibold text-dark-gray-800'>
                Inner Peace
              </h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src={imageCarousel} alt='Image 2' />
        </SplideSlide>
      </Splide>
    </div>
  );
}
