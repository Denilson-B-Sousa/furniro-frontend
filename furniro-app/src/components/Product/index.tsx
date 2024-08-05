/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardProduct } from '@components/CardProduct';
import { Spinner } from '@phosphor-icons/react';
import { useProductData } from 'hooks/product/useProductData';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type ProductProps = {
  nameFilter?: string;
  priceFilter?: string;
  colorFilter?: string;
  setVisibleProductCount?: Dispatch<SetStateAction<number>> | any;
  categoryFilter?: string;
  title: string;
  currentPage: number;
  itemsPerPage: number;
}

export function Product({ nameFilter, priceFilter, colorFilter, setVisibleProductCount, categoryFilter, title, currentPage, itemsPerPage }: ProductProps) {
  const { data, isLoading } = useProductData();
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  console.log(filteredData);

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

  const indexOfLastProduct = (currentPage + 1) * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

   useEffect(() => {
     if (setVisibleProductCount) {
       setVisibleProductCount(currentProducts.length);
     }
   }, [currentProducts, setVisibleProductCount]);

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
          className='m-auto grid justify-items-center w-[100%] gap-y-8 gap-x-8 grid-cols-1  tablet-lg:grid-cols-2 tablet-lg:w-[40rem] laptop:w-[58rem] laptop:grid-cols-3 desktop:grid-cols-4 desktop:w-[78rem]'
        >
          {currentProducts?.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id.toString()}
              title={product.title}
              description={product.shortDescription}
              price={product.price}
              salesPrice={product.salesPrice}
              imageUrl={product.image}
              sku={product.sku}
              rating={product.rating}
              category={product.category}
              colors={product.colors}
              images={product.images}
              size={product.size}
              tags={product.tags}
              
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
    </section>
  );
}
