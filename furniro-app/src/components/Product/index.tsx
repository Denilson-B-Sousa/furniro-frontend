/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardProduct } from '@components/CardProduct';
import { Spinner } from '@phosphor-icons/react';
import { useProductData } from 'hooks/product/useProductData';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface ProductProps {
  nameFilter?: string;
  priceFilter?: string;
  colorFilter?: string;
  setVisibleProductCount?: Dispatch<SetStateAction<number>> | any;
  categoryFilter?: string;
  title: string;

}

export function Product({ nameFilter, priceFilter, colorFilter, setVisibleProductCount, categoryFilter, title }: ProductProps) {
  const { data, isLoading } = useProductData();
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if(data) {
      let filtered = data;

      if(nameFilter) {
        filtered = filtered.filter((product: any) => 
          product.title.toLowerCase().includes(nameFilter.toLowerCase())
        );
      }

      if(priceFilter) {
        filtered = filtered.filter(
          (product: any) => product.price <= parseFloat(priceFilter)
        );
      }


      if (colorFilter) {
        filtered = filtered.filter((product: any) =>
          product.colors && product.colors.some((color: any) => color.name === colorFilter)
        )
      }

       if (categoryFilter) {
        filtered = filtered.filter((product: any) =>
          product.category.toLowerCase() === categoryFilter.toLowerCase()
        );
      }

      setFilteredData(filtered);
    }
  }, [data, nameFilter, priceFilter, colorFilter, categoryFilter])

  useEffect(() => {
    if (setVisibleProductCount) {
      setVisibleCount(visibleCount);
    }
  }, [visibleCount, setVisibleCount, setVisibleProductCount])



  const productContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productContainerRef.current) {
      const productCount = productContainerRef.current.childElementCount;
      setVisibleCount(productCount);
    }
  }, [data]);


  return (
    <section>
      <h2 className='py-8 text-center font-poppins text-3xl font-bold text-dark-gray-800'>
        {title}
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
