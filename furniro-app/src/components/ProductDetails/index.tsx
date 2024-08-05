import { Button } from "@components/Button";
import { Product } from "@components/Product";
import { ProductDescription } from "@components/ProductDescription";
import { ProductSlider } from "@components/ProductSlider";
import { FacebookLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";
import { addToCart } from "store/cart-slice";
import { useCartDispatch } from "store/hooks";
import { SingleItem } from "store/single-product-slice";
import { formatPrice } from "utils/Formatter";

type ProductDetailsProps = {
  product: SingleItem;
  itemsPerPage: number;
};

export function ProductDetails({ product, itemsPerPage }: ProductDetailsProps) {

  const dispatch = useCartDispatch();

  const id : string = product.id;
  const title : string = product.title;
  const price : number = product.price;
  const imageUrl : string = product.imageUrl;

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price, imageUrl }));
  }

  return (
    <>
      <div className='grid grid-cols-1 px-12 laptop:grid-cols-2 laptop:px-6'>
        <ProductSlider
          mainImage={product.images.mainImage}
          gallery={product.images.gallery}
        />
        <section className='flex flex-col gap-4'>
          <div key={product.id}>
            <h2 className='w-96 font-poppins text-4xl font-medium text-black'>
              {product.title}
            </h2>
            <div className='flex flex-col gap-2'>
              <span className='text-dark font-poppins text-xl font-medium text-dark-gray-300'>
                {formatPrice(product.price)}
              </span>
              <span>{product.rating}</span>
            </div>
            <p className='w-[20rem] py-4 font-poppins text-sm text-black laptop:w-[28rem]'>
              {product.description}
            </p>
            <span className='text-dark-gray-300'>Size:</span>
            <div className='flex items-center gap-4 py-2'>
              {product.size.map((size, index) => (
                <label
                  key={index}
                  className='inline-flex cursor-pointer items-center'
                >
                  <input
                    type='radio'
                    name='size'
                    value={size}
                    className='peer hidden'
                  />
                  <span className='bg-light-peach-500 flex h-[30px] w-[30px] items-center justify-center rounded-md font-poppins text-xs text-black peer-checked:bg-light-peach-900 peer-checked:text-white'>
                    {size}
                  </span>
                </label>
              ))}
            </div>
            <span className='text-dark-gray-300'>Color:</span>
            <button className='flex gap-4 py-2'>
              {product.colors.map((color) => (
                <span
                  style={{ backgroundColor: color.name }}
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
              <Button variant='outlined-secondary' size='md' onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </div>
            <div className='w-[36rem] border-[1px] border-[#9F9F9F]/20'></div>
          </div>
        </section>
        <div></div>
        <div className='flex flex-col justify-between py-12 font-poppins text-dark-gray-300'>
          <div className='flex flex-col justify-between gap-3'>
            <span>
              SKU <span className='ml-16 mr-2'>:</span> {product.sku}
            </span>
            <span>
              Category <span className='ml-[19px] mr-2'>:</span>{' '}
              {product.category}
            </span>
            <span>
              Tags <span className='ml-14 mr-2'>:</span> {product.tags}
            </span>
            <span className='inline-flex'>
              Share <span className='ml-[52px] mr-2'>:</span>
              <div className='inline-flex gap-4'>
                <a
                  href='https://www.facebook.com/?locale=pt_BR'
                  target='_blank'
                >
                  <FacebookLogo fill='black' width={24} height={24} />
                </a>
                <a href='https://www.linkedin.com/feed/' target='_blank'>
                  <LinkedinLogo fill='black' width={24} height={24} />
                </a>
                <a href='https://twitter.com/' target='_blank'>
                  <TwitterLogo fill='black' width={24} height={24} />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>

      <ProductDescription
        description={product.description}
        gallery={product.images.gallery}
      />

      <section className='m-auto'>
        <Product title='Related Products' currentPage={1} itemsPerPage={itemsPerPage} />
      </section>
    </>
  );
}
