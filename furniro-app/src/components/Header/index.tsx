import { Modal } from '@components/Modal';
import { List } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { NavLink } from 'react-router-dom';

import { Navbar } from '../Navbar/index';

export function Header() {
  return (
    <header className='m-auto flex items-center justify-between bg-white px-4 py-8 mobile:w-[100%] tablet:w-[100vw] tablet:max-w-[40rem] tablet-lg:w-[48rem] tablet-lg:max-w-[48rem] tablet-lg:px-[3.25rem] laptop:w-[64rem] laptop:max-w-[64rem] laptop-lg:w-[80rem] laptop-lg:max-w-[80rem] desktop:w-[90rem] desktop:max-w-[90rem]'>
      <div className='flex items-center gap-[5px]'>
        <img
          src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/logo.png'
          alt='Furniro Logo'
          width={50}
          height={32}
        />
        <NavLink
          to={'/'}
          className='font-montserrat text-xl font-bold tablet:text-3xl'
        >
          Furniro
        </NavLink>
      </div>

      <Navbar />

      <div className='flex items-center gap-8'>
        <div>
          <NavLink to={'auth/login'}>
            <img
              src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/user.svg'
              alt=''
            />
          </NavLink>
        </div>

        <Dialog.Root>
          <Dialog.Trigger>
            <img
              src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/cart.svg'
              alt=''
            />
          </Dialog.Trigger>
          <Modal />
        </Dialog.Root>
        <div className='lg:hidden'>
          <button>
            <List
              color='black'
              width={32}
              height={32}
              className='inline-flex items-end'
            />
          </button>
        </div>
      </div>
    </header>
  );
}
