import { Banner } from '@components/Banner';
import { Brand } from '@components/Brand';
import { Filter } from '@components/Filter';
import { Product } from '@components/index';
import { useState } from 'react';

export function Shop() {

  const [nameFilter, setNameFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [colorFilter, setColorFilter] = useState<string>('');
  const [visibleProductCount, setVisibleProductCount] = useState<number>(8);
  const [categoryFilter, setCategoryFilter] = useState<string>('');

  return (
    <main>
      <Banner title='Shop' link='shop' uri='/shop' />
      <Filter
        setNameFilter={setNameFilter}
        setPriceFilter={setPriceFilter}
        setColorFilter={setColorFilter}
        setCategoryFilter={setCategoryFilter}
        visibleProductCount={visibleProductCount}
      />
      <div className='py-12'>
        <Product
          nameFilter={nameFilter}
          priceFilter={priceFilter}
          colorFilter={colorFilter}
          categoryFilter={categoryFilter}
          setVisibleProductCount={setVisibleProductCount}
          title=''
        />
      </div>
      <Brand />
    </main>
  );
}
