import { Button } from '@components/Button';
import { CardProduct } from '@components/CardProduct';
import { Spinner } from '@phosphor-icons/react';
import { useProductData } from 'hooks/product/useProductData';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface ProductProps {
  showMoreAction?: () => void;
}

export function Product({ showMoreAction }: ProductProps) {
  const { data, isLoading } = useProductData();
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    console.log('Show More button clicked');
    if (showMoreAction) {
      showMoreAction();
    } else {
      setVisibleCount((prevCount) => prevCount + 8);
    }
  };

  return (
    <section>
      <h2 className='py-8 text-center font-poppins text-3xl font-bold text-dark-gray-800'>
        Our Products
      </h2>
      {isLoading ? (
        <div className='flex h-40 items-center justify-center'>
          <Spinner
            className='animate-spin-slow transition-all duration-200'
            width={48}
            height={48}
          />
        </div>
      ) : (
        <>
          <div className='m-auto grid w-[77rem] grid-cols-1 gap-x-8 gap-y-12 pl-44 laptop:grid-cols-4 laptop:pl-0'>
            {data
              ?.slice(0, visibleCount)
              .map((product) => (
                <CardProduct
                  key={product.id}
                  id={product.id.toString()}
                  title={product.title}
                  shortDescription={product.shortDescription}
                  price={product.price}
                  salesPrice={product.salesPrice}
                  imageUrl={product.image}
                />
              ))}
          </div>

          <div className='m-auto w-56 py-6'>
            {showMoreAction ? (
              <NavLink to='/shop' className='block w-full'>
                <Button variant='outlined' size='xl'>
                  Show More
                </Button>
              </NavLink>
            ) : (
              <Button variant='outlined' size='xl' onClick={handleShowMore}>
                Show More
              </Button>
            )}
          </div>
        </>
      )}
    </section>
  );
}
