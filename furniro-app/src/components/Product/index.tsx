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
        <div className='m-auto grid gap-y-12 gap-x-8 w-[77rem] grid-cols-1 pl-44 laptop:pl-0 laptop:grid-cols-4'>
          {data?.map((product) => (
            <CardProduct
              key={product.id}
              title={product.title}
              shortDescription={product.shortDescription}
              price={product.price}
              salesPrice={product.salesPrice}
              imageUrl={product.image}
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
          />
        </span>
      )}

      <div className='w-56 m-auto py-6'>
        <Button variant="outlined" size="xl">Show More</Button>
      </div>
    </section>
  );
}
