import { X } from '@phosphor-icons/react';
import * as Popover from '@radix-ui/react-popover';
import { useProductData } from 'hooks/product/useProductData';
import { Dispatch, SetStateAction, useState } from 'react';

type FilterProps = {
  setNameFilter: Dispatch<SetStateAction<string>>;
  setPriceFilter: Dispatch<SetStateAction<string>>;
  setColorFilter: Dispatch<SetStateAction<string>>;
  setCategoryFilter: Dispatch<SetStateAction<string>>;
  visibleProductCount: number;
  itemsPerPage: number;
};

export function Filter({
  setNameFilter,
  setPriceFilter,
  setColorFilter,
  setCategoryFilter,
  itemsPerPage
}: FilterProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('')

  console.log(category);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameFilter(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(value);
    setPriceFilter(value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColor(value);
    setColorFilter(value);
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    setCategoryFilter(category);
  }

  const handleClearFilters = () => {

    setCategory('');
    setColor('');
    setPrice('');
    setName('');
  };

  const { data } = useProductData();
  
  return (
    <section className='flex flex-wrap mobile:justify-center mobile:gap-y-8 tablet:justify-around bg-light-peach-200 py-8 z-50'>
      <div className='inline-flex items-center gap-4'>
        <div>
          <Popover.Root >
            <Popover.Trigger >
              <button className='inline-flex items-end gap-2'>
                <img
                  src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/filter.svg'
                  alt='Filtrar Produto'
                />
                Filter
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className='data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[100%] rounded bg-white p-8 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)]'
                sideOffset={5}
              >
                <div className='flex flex-col gap-2.5'>
                  <p className='text-mauve12 mb-2.5 text-[15px] font-medium leading-[19px]'>
                    Filters
                  </p>
                  <fieldset className='flex items-center gap-5'>
                    <label
                      className='text-violet11 w-[75px] text-[13px]'
                      htmlFor='width'
                    >
                      Price
                    </label>
                    <input
                      className='text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
                      id='width'
                      defaultValue='500'
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </fieldset>
                  <fieldset className='flex items-center gap-5'>
                    <label
                      className='text-violet11 w-[75px] text-[13px]'
                      htmlFor='maxWidth'
                    >
                      Name
                    </label>
                    <input
                      className='text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
                      id='maxWidth'
                      defaultValue='Rack'
                      value={name}
                      onChange={handleNameChange}
                    />
                  </fieldset>
                  <fieldset className='flex flex-wrap items-center gap-4'>
                    <label
                      className='text-violet11 w-[75px] appearance-none text-[13px]'
                      htmlFor='height'
                    >
                      Colors
                    </label>

                    <input
                      className='h-[32px] w-[32px] cursor-pointer appearance-none rounded-full bg-black/90 p-2 hover:bg-black'
                      id='black'
                      type='radio'
                      name='color'
                      value='black'
                      checked={color === 'black'}
                      onChange={handleColorChange}
                    />
                    <input
                      className='h-[32px] w-[32px] cursor-pointer appearance-none rounded-full bg-dark-gray-700 p-2 hover:bg-dark-gray-800'
                      id='dark-gray'
                      type='radio'
                      name='color'
                      value='dark-gray'
                      checked={color === 'dark-gray-900'}
                      onChange={handleColorChange}
                    />

                    <input
                      className='h-[32px] w-[32px] cursor-pointer appearance-none rounded-full bg-green-700 p-2 hover:bg-green-800'
                      id='green'
                      type='radio'
                      name='color'
                      value='green'
                      checked={color === 'green'}
                      onChange={handleColorChange}
                    />

                    <input
                      className='h-[32px] w-[32px] cursor-pointer appearance-none rounded-full bg-yellow-500 p-2 hover:bg-yellow-600'
                      id='yellow'
                      type='radio'
                      name='color'
                      value='yellow'
                      checked={color === 'yellow'}
                      onChange={handleColorChange}
                    />

                    <input
                      className='h-[32px] w-[32px] cursor-pointer appearance-none rounded-full bg-red-500 p-2 hover:bg-red-600'
                      id='red'
                      type='radio'
                      name='color'
                      value='red'
                      checked={color === 'yellow'}
                      onChange={handleColorChange}
                    />

                    <input
                      className='h-[32px] w-[32px] cursor-pointer appearance-none rounded-full bg-blue-500 p-2 hover:bg-blue-600'
                      id='blue'
                      type='radio'
                      name='color'
                      value='blue'
                      checked={color === 'yellow'}
                      onChange={handleColorChange}
                    />
                  </fieldset>
                  <fieldset className='flex items-center gap-5'>
                    <label
                      className='text-violet11 w-[75px] text-[13px]'
                      htmlFor='maxHeight'
                    >
                      Category
                    </label>
                    <button
                      className='text-gray-500'
                      onClick={() => handleCategoryChange('Sofás')}
                    >
                      Sofá
                    </button>
                    <button
                      className='text-gray-500'
                      onClick={() => handleCategoryChange('Racks')}
                    >
                      Rack
                    </button>
                  </fieldset>
                </div>
                <button
                  className='pt-8 font-poppins text-blue-500'
                  onClick={handleClearFilters}
                >
                  Clear all filters
                </button>

                <Popover.Close
                  className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[5px] top-[5px] inline-flex h-[25px] w-[25px] cursor-default cursor-pointer items-center justify-center rounded-full outline-none focus:shadow-[0_0_0_2px]'
                  aria-label='Close'
                >
                  <X />
                </Popover.Close>
                <Popover.Arrow className='fill-white' />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
        <div className='inline-flex gap-8'>
          <button>
            <img
              src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/grid-big-round.svg'
              alt='Filtro'
            />
          </button>
          <button>
            <img
              src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/view-list.svg'
              alt=''
            />
          </button>
        </div>
        <div className='border-r-4 border-dark-gray-700'></div>
        Showing {itemsPerPage} of {data?.length} results
      </div> 

      <div className='flex justify-center gap-4'>
        <div className='inline-flex items-center justify-center gap-2'>
          <span>Show</span>
          <input type='number' className='h-[48px] w-[48px]' placeholder='16' />
        </div>
        <div className='inline-flex items-center gap-2'>
          <span>Sort By</span>
          <input
            type='text'
            className='h-[48px] w-[150px]'
            placeholder='Default'
          />
        </div>
      </div>
    </section>
  );
}
