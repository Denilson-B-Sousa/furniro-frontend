import { Button } from '@components/Button';
import { CardProduct } from '@components/CardProduct';
import { Spinner } from '@phosphor-icons/react';
import { useProductData } from 'hooks/product/useProductData';

export function Product() {
  const { data, isLoading } = useProductData();

  return (
    <section>
      <h2 className='py-8 text-center font-poppins text-3xl font-bold text-dark-gray-800'>
        Our Products
      </h2>
      {!isLoading && (
        <div
          data-testid='content'
          className='m-auto grid w-[77rem] grid-cols-1 gap-x-8 gap-y-12 pl-44 laptop:grid-cols-4 laptop:pl-0'
        >
          {data?.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id.toString()}
              title={product.title}
              shortDescription={product.shortDescription}
              price={product.price}
              salesPrice={product.salesPrice}
              imageUrl={product.image}
              data-testid='card-product'
            />
          ))}
        </div>
      )}

      {isLoading && (
        <span className='middle-[50%] transform: absolute left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <Spinner
            className='animate-spin-slow transition-all duration-200'
            width={48}
            height={48}
            role='status'
          />
        </span>
      )}

      <div className='m-auto w-56 py-6'>
        <Button variant='outlined' size='xl'>
          Show More
        </Button>
      </div>
    </section>
  );
}
