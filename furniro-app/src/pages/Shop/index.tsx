import { Banner } from '@components/Banner';
import { Brand } from '@components/Brand';
import { Filter } from '@components/Filter';
import { Product } from '@components/index';
import { Pagination } from '@components/Pagination';
import { useState } from 'react';

export function Shop() {

  const [nameFilter, setNameFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [colorFilter, setColorFilter] = useState<string>('');
  const [visibleProductCount, setVisibleProductCount] = useState<number>(8);
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage] = useState<number>(16);

   function handlePageChange(page: number) {
     setCurrentPage(page);
   }

  return (
    <main>
      <Banner title='Shop' link='shop' uri='/shop' />
      <Filter
        setNameFilter={setNameFilter}
        setPriceFilter={setPriceFilter}
        setColorFilter={setColorFilter}
        setCategoryFilter={setCategoryFilter}
        visibleProductCount={visibleProductCount}
        itemsPerPage={itemsPerPage}
      />
      <div className='py-12'>
        <Product
          nameFilter={nameFilter}
          priceFilter={priceFilter}
          colorFilter={colorFilter}
          categoryFilter={categoryFilter}
          setVisibleProductCount={setVisibleProductCount}
          title=''
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <div className='flex'>
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Brand />
    </main>
  );
}
