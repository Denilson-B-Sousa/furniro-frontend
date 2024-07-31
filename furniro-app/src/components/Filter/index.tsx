import { X } from '@phosphor-icons/react';
import * as Popover from '@radix-ui/react-popover';

export function Filter() {
  return (
    <section className='flex justify-around bg-light-peach-200 py-8'>
      <div className='inline-flex items-center gap-4'>
        <div>
          <Popover.Root>
            <Popover.Trigger>
              <button className='inline-flex gap-2'>
                <img
                  src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/filter.svg'
                  alt='Filtrar Produto'
                />
                Filter
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className='data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[260px] rounded bg-white p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)]'
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
                    />
                  </fieldset>
                  <fieldset className='flex items-center gap-4'>
                    <label
                      className='text-violet11 w-[75px] text-[13px]'
                      htmlFor='height'
                    >
                      Colors
                    </label>
                    <input
                      className='h-[32px] w-[32px] rounded-full bg-black p-2'
                      id='height'
                    />
                    <input
                      className='h-[32px] w-[32px] rounded-full bg-dark-gray-800 p-2'
                      id='height'
                    />
                  </fieldset>
                  <fieldset className='flex items-center gap-5'>
                    <label
                      className='text-violet11 w-[75px] text-[13px]'
                      htmlFor='maxHeight'
                    >
                      Category
                    </label>
                    <button className='text-gray-500'>Sofá, Rack, Mesa</button>
                  </fieldset>
                </div>
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
        <div>
          <button>
            <img
              src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/grid-big-round.svg'
              alt='Filtro'
            />
          </button>
          <button>
            <img
              src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/exchange.svg'
              alt=''
            />
          </button>
        </div>
        <div className='border-r-4 border-dark-gray-700'></div>
        Showing 1-16 of 32 results
      </div>

      <div className='flex justify-center gap-4'>
        <div className='inline-flex items-center justify-center gap-2'>
          <span>Show</span>
          <input type='number' className='h-[48px] w-[48px]' placeholder='16' />
        </div>
        <div className='inline-flex items-center gap-2'>
          <span>Short By</span>
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
