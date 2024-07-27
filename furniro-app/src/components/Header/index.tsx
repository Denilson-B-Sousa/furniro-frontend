import { Modal } from '@components/Modal';
import { List } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { NavLink } from 'react-router-dom';

import cart from '../../assets/icons/cart.svg';
import user from '../../assets/icons/user.svg';
import logo from '../../assets/images/logo.png';
import { Navbar } from '../Navbar/index';

export function Header() {
  return (
    <header className='m-auto flex w-[26.875rem] max-w-[26.875rem] items-center justify-between bg-white px-4 py-8 tablet:w-[40rem] tablet:max-w-[40rem] tablet-lg:w-[48rem] tablet-lg:max-w-[48rem] tablet-lg:px-[3.25rem] laptop:w-[64rem] laptop:max-w-[64rem] laptop-lg:w-[80rem] laptop-lg:max-w-[80rem] desktop:w-[90rem] desktop:max-w-[90rem]'>
      <div className='flex items-center gap-[5px]'>
        <img src={logo} alt='Furniro Logo' width={50} height={32} />
        <NavLink to={'/'} className='font-montserrat text-3xl font-bold'>
          Furniro
        </NavLink>
      </div>

      <Navbar />

      <div className='flex items-end gap-8'>
        <div>
          <button>
            <img src={user} alt='' />
          </button>
        </div>

        <Dialog.Root>
          <Dialog.Trigger>
            <img src={cart} alt='' />
          </Dialog.Trigger>
          <Modal />
        </Dialog.Root>

        <div className='inline-flex items-end lg:hidden'>
          <button>
            <List color='black' width={28} height={30} />
          </button>
        </div>
      </div>
    </header>
  );
}
