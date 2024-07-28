import { Button } from '@components/Button';
import { Product } from '@components/Product';
import { ProductDescription } from '@components/ProductDescription';
import { ProductSlider } from '@components/ProductSlider';
import { FacebookLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';
import { useProductData } from 'hooks/product/useProductData';

import { formatPrice } from '../../utils/Formatter';

export function ProductDetails() {
  const { data } = useProductData();

  if (!data || data.length === 0) {
    return <div>No product data available</div>;
  }

  const product = data[0];

  return (
    <>
      <div className='grid grid-cols-2 px-6'>
        <ProductSlider />
        <section>
          <div key={product.id}>
            <h2 className='font-poppins text-4xl font-medium text-black'>
              {product.title}
            </h2>
            <span className='text-dark font-poppins text-sm font-medium text-dark-gray-500'>
              {formatPrice(product.price)}
            </span>
            <span>{product.rating}</span>
            <p className='w-[36rem] py-4 font-poppins text-lg text-black'>
              {product.description}
            </p>
            <span className='text-dark-gray-300'>Size:</span>
            <button className='flex items-center gap-4 py-2'>
              {product.size.map((size) => (
                <span className='bg-light-peach-500 inline-flex h-[30px] w-[30px] items-center justify-center rounded-md font-poppins text-xs text-black active:bg-light-peach-900 active:text-white'>
                  {size}
                </span>
              ))}
            </button>
            <span className='text-dark-gray-300'>Color:</span>
            <button className='flex gap-4 py-2'>
              {product.colors.map((color) => (
                <span
                  style={{ backgroundColor: color.hex }}
                  className='h-2 w-2 rounded-full border-2 border-black p-[12px]'
                  title={color.name}
                ></span>
              ))}
            </button>
            <div className='col-span-2 flex gap-[1.12rem] py-4'>
              <div className='flex items-center rounded-xl border-2 border-dark-gray-500 bg-white'>
                <button className='px-2 py-2 text-black hover:bg-gray-200'>
                  -
                </button>
                <input
                  type='number'
                  value={1}
                  className='w-16 border-none bg-transparent text-center'
                />
                <button className='px-2 py-2 text-black hover:bg-gray-200'>
                  +
                </button>
              </div>
              <Button variant='outlined-secondary' size='md'>
                Add To Cart
              </Button>
            </div>
            <div className='w-[36rem] border-[1px] border-[#9F9F9F]/20'></div>
          </div>
        </section>
        <div></div>
        <div className='flex flex-col justify-between py-12 font-poppins text-dark-gray-300'>
          <span>SKU : {product.sku}</span>
          <span>Category : {product.category}</span>
          <span>Tags : {product.tags}</span>
          <span className='inline-flex'>
            Share:
            <a href='#'>
              <FacebookLogo />
            </a>
            <a href='#'>
              <LinkedinLogo />
            </a>
            <a href='#'>
              <TwitterLogo />
            </a>
          </span>
        </div>
      </div>

      <ProductDescription />

      <section className='m-auto'>
        <Product />
      </section>
    </>
  );
}
