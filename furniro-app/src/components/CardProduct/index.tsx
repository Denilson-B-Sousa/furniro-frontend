import { Button } from '@components/Button';
import { ArrowsLeftRight, Heart, ShareNetwork } from '@phosphor-icons/react';
import { useState } from 'react';
import { addToCart } from 'store/cart-slice';
import { useCartDispatch } from 'store/hooks';
import { PriceFormatter } from 'utils/Formatter';

type CardProductProps = {
  id: string;
  title: string;
  shortDescription: string;
  price: number;
  salesPrice: number;
  imageUrl: string;
};
export function CardProduct({
  id,
  title,
  shortDescription,
  price,
  salesPrice,
  imageUrl,
}: CardProductProps) {
  const [isHovered, setIsHovered] = useState(false);

  const dispath = useCartDispatch();

  function handleAddToCart() {
    dispath(addToCart({ id, title, price, imageUrl}))
  }

  return (
    <div className='relative m-auto'>
      <div
        className='relative h-[450px] w-[285px] '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageUrl} alt={title} width='100%'  />
        <div className='absolute bottom-0 bg-light-peach-200 p-4'>
          <h3 className='font-poppins text-2xl font-semibold text-dark-gray-800'>
            {title.split("", 30)}
          </h3>
          <span className='font-poppins text-dark-gray-700'>
            {shortDescription.split("", 20)}
          </span>
          <div className='inline-flex items-center gap-2 py-4 font-poppins font-semibold'>
            <span className='font-poppins font-semibold text-dark-gray-800'>
              {PriceFormatter.format(price)}
            </span>
            <span className='text-sm text-dark-gray-300 line-through'>
              {PriceFormatter.format(salesPrice)}
            </span>
          </div>
        </div>

        {isHovered && (
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 text-white transition-all duration-500'>
            <Button variant='tertiary' size='lg' onClick={handleAddToCart}>
              Add to cart
            </Button>
            <div className='flex space-x-2'>
              <button className='inline-flex items-center p-2 font-poppins font-medium'>
                <ShareNetwork width={16} height={16} />
                Share
              </button>
              <button className='inline-flex items-center p-2 font-poppins font-medium'>
                <ArrowsLeftRight width={16} height={16} />
                Compare
              </button>
              <button className='inline-flex items-center p-2 font-poppins font-medium'>
                <Heart width={20} height={20} />
                Like
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
