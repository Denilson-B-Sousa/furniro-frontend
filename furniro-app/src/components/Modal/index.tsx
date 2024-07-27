import closeBag from '@assets/icons/close-bag.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NavLink } from 'react-router-dom';
import { PriceFormatter } from 'utils/Formatter';

export function Modal() {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/20' />
        <Dialog.Content className='fixed inset-0 left-[87%] top-[48%] flex h-[44rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 transform flex-col bg-white px-10 py-10 outline-none'>
          <Dialog.Close className='absolute right-0 top-0 px-10 py-10 text-slate-400 hover:text-slate-100'>
            <img src={closeBag} alt='Fechar Carrinho' width={24} height={24} />
          </Dialog.Close>
          <Dialog.Title className='font-poppins text-2xl font-semibold text-black'>
            Shopping Cart
          </Dialog.Title>
          <div className='border-b-dark-gray-350 my-4 w-[16rem] border-2'></div>
          <div className='flex justify-between'>
            <span className='text- text-black'>Subtotal:</span>
            <span className='text-light-peach-900'>
              {PriceFormatter.format(520000000)}
            </span>
          </div>
          <div className='border-b-dark-gray-350 my-4 w-full border-2'></div>
          <div className='flex justify-around gap-2'>
            <NavLink
              to={'/cart'}
              className='rounded-full border-2 border-black px-6 py-[0.25rem]'
            >
              Cart
            </NavLink>
            <NavLink
              to={'/checkout'}
              className='rounded-full border-2 border-black px-6 py-[0.25rem]'
            >
              Checkout
            </NavLink>
            <NavLink
              to={'/singleProduct'}
              className='rounded-full border-2 border-black px-6 py-[0.25rem]'
            >
              Comparison
            </NavLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
}
