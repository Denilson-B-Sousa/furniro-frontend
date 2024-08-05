import { Address } from "../Address";
import { NavSection } from "../NavSection";
import { SocialMediaSection } from "../SocialMediaSection";

export function Footer() {

  const link : string[] = ['Home', 'Shop', 'About', 'Contact'];
  const help : string[] = ['Payment Options', 'Returns', 'Privacy Policy'];

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
        <NavSection title='Links' links={link} />
        <NavSection title='Help' links={help} />
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
          <a href='#' className='border-b-[1px] border-black outline-none'>
            SUBSCRIBE
          </a>
        </div>
      </div>
    </footer>
  );
}