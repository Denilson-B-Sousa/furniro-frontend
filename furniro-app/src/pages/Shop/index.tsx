import { Banner } from '@components/Banner';
import { Brand } from '@components/Brand';
import { Filter } from '@components/Filter';
import { Product } from '@components/index';

export function Shop() {
  return (
    <main>
      <Banner title='Shop' link='shop' uri='/shop'/>
      <Filter />
      <Product />
      <Brand />
    </main>
  );
}
