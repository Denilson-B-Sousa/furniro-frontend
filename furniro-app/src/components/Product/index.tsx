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

}

export function Product({ nameFilter, priceFilter, colorFilter, setVisibleProductCount, categoryFilter }: ProductProps) {
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
          <div
            className='m-auto grid w-[77rem] grid-cols-1 gap-x-8 gap-y-12 pl-44 laptop:grid-cols-4 laptop:pl-0'
          >
            {filteredData.slice(0, visibleCount).map((product) => (
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
        </>
      )}


    </section>
  );
}
