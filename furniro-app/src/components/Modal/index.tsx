import closeBag from '@assets/icons/close-bag.svg';
import { CartItems } from '@components/CartItems/CartItems';
import * as Dialog from '@radix-ui/react-dialog';

export function Modal() {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/20' />
        <Dialog.Content className='fixed z-50 inset-0 mobile:left-1/2 mobile:top-1/2 laptop:left-[87%] laptop:top-[48%] flex h-[44rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 transform flex-col bg-white px-10 py-10 outline-none'>
          <Dialog.Close className='absolute right-0 top-0 px-10 py-10 text-slate-400 hover:text-slate-100'>
            <img src={closeBag} alt='Fechar Carrinho' width={24} height={24} />
          </Dialog.Close>
          <Dialog.Title className='font-poppins text-2xl font-semibold text-black'>
            Shopping Cart
          </Dialog.Title>
          <div className='border-b-dark-gray-350 my-4 w-[16rem] border-2'></div>

          <CartItems/>

        
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
}
