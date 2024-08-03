import { Button } from '@components/Button';
import { ArrowsLeftRight, Heart, ShareNetwork } from '@phosphor-icons/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart } from 'store/cart-slice';
import { useCartDispatch, useProductDispatch } from 'store/hooks';
import { addProduct, Color, Image } from 'store/single-product-slice';
import { PriceFormatter } from 'utils/Formatter';


type CardProductProps = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  salesPrice: number;
  rating: number;
  sku: string;
  category: string;
  quantity: number;
  tags: string[];
  colors: Color[];
  size: string[];
  images: Image;
};

export function CardProduct({
  id,
  title,
  description,
  price,
  salesPrice,
  imageUrl,
  sku,
  category,
  rating,
  images,
  colors,
  size,
  tags
}: CardProductProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useCartDispatch();
  const productDispatch = useProductDispatch();

  function handleAddToCart(e: React.MouseEvent) {
    e.stopPropagation();
    dispatch(addToCart({ id, title, price, imageUrl }));
  }

  function handleAddToSinglePage(e: React.MouseEvent) {
    e.stopPropagation();
    productDispatch(
      addProduct({
        id,
        title,
        price,
        salesPrice,
        imageUrl,
        description,
        rating,
        sku,
        category,
        images,
        colors,
        size,
        tags
      }),
    );

    console.log(images)

    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  }

  return (
    <div className='relative m-auto'>
      <div
        className='relative h-[450px] w-[285px]'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imageUrl} alt={title} width='100%' />
        <div className='absolute bottom-0 bg-light-peach-200 p-4'>
          <h3 className='font-poppins text-2xl font-semibold text-dark-gray-800'>
            {title.split('', 30)}
          </h3>
          <span className='font-poppins text-dark-gray-700'>
            {description.split('', 20)}
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
          <div
            className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-50 text-white transition-all duration-500 cursor-pointer'
            onClick={handleAddToSinglePage}
          >
            <Button
              variant='tertiary'
              size='lg'
              onClick={handleAddToCart}
              style={{ zIndex: 10 }}
            >
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
