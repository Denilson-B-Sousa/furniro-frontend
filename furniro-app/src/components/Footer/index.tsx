import { NavLink, useNavigate } from 'react-router-dom';

import { Address } from '../Address';
import { SocialMediaSection } from '../SocialMediaSection';

export function Footer() {

  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
  ) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer
      role='contentinfo'
      className='container grid w-[26.875rem] max-w-[26.875rem] grid-cols-1 items-center py-12 tablet:w-[40rem] tablet:max-w-[40rem] tablet:grid-cols-2 tablet:gap-12 tablet:px-6 tablet-lg:w-[48rem] tablet-lg:max-w-[48rem] tablet-lg:px-[3.25rem] laptop:w-[64rem] laptop:max-w-[64rem] laptop:grid-cols-2 laptop-lg:w-[80rem] laptop-lg:max-w-[80rem] laptop-lg:grid-cols-3 desktop:w-[90rem] desktop:max-w-[90rem]'
    >
      <div className='flex flex-col gap-8'>
        <h2 className='text-center font-poppins text-[1.5rem] font-bold text-black laptop:px-10 laptop:text-left'>
          Furniro.
        </h2>
        <Address />
        <SocialMediaSection />
      </div>

      <nav className='flex justify-center gap-24 tablet:gap-36'>
        <div className='inline-flex flex-col gap-6'>
          <h2 className='text-[#9F9F9F]'>Links</h2>
          <ul className='inline-flex flex-col gap-6 font-medium text-black'>
            <li>
              <NavLink to='/' onClick={(e) => handleClick(e, '/')}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop' onClick={(e) => handleClick(e, '/shop')}>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={(e) => handleClick(e, '/about')}>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={(e) => handleClick(e, '/contact')}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='inline-flex flex-col gap-6'>
          <h2 className='text-[#9F9F9F]'>help</h2>
          <ul className='inline-flex flex-col gap-6 font-medium text-black'>
            <li>
              <NavLink to='/'>Payment Options</NavLink>
            </li>
            <li>
              <NavLink to='/'>Returns</NavLink>
            </li>
            <li>
              <NavLink to='/'>Privacy Policies</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className='flex flex-col px-8 tablet:m-auto tablet:px-4 tablet:py-12'>
        <h3 className='font-poppins font-medium text-dark-gray-300'>
          Newsletter
        </h3>
        <div className='inline-flex gap-8'>
          <input
            type='email'
            required
            placeholder='Enter Your Email Address'
            className='border-b-[1px] border-black outline-none'
          />
          <button className='border-b-[1px] border-black outline-none' type='submit'>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
}
