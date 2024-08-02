import { Modal } from '@components/Modal';
import { BagSimple, BookOpenText, House, List, Phone } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { NavLink } from 'react-router-dom';

import { Navbar } from '../Navbar/index';

export function Header() {
  return (
    <header className='m-auto flex items-center justify-between bg-white px-4 py-8 mobile:w-[100%] tablet:w-[100vw] tablet:max-w-[40rem] tablet-lg:w-[48rem] tablet-lg:max-w-[48rem] tablet-lg:px-[3.25rem] laptop:w-[64rem] laptop:max-w-[64rem] laptop-lg:w-[80rem] laptop-lg:max-w-[80rem] desktop:w-[90rem] desktop:max-w-[90rem]'>
      <div className='flex items-center gap-1'>
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <List
                color='black'
                width={32}
                height={32}
                className='inline-flex items-end'
              />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className='data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50 min-w-[220px] rounded-md bg-white p-8 font-poppins text-xl font-medium shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]'
                sideOffset={10}
              >
                <DropdownMenu.Item>
                  <NavLink to={'/'} className='flex items-center gap-4 py-4'>
                    <House width={24} height={24} />
                    Home
                  </NavLink>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <NavLink
                    to={'/shop'}
                    className='flex items-center gap-4 py-4'
                  >
                    <BagSimple width={24} height={24} />
                    Shop
                  </NavLink>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <NavLink
                    to={'/about'}
                    className='flex items-center gap-4 py-4'
                  >
                    <BookOpenText width={24} height={24} />
                    About
                  </NavLink>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <NavLink
                    to={'/contact'}
                    className='flex items-center gap-4 py-4'
                  >
                    <Phone width={24} height={24} />
                    Contact
                  </NavLink>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}
