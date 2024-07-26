import { CaretRight } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

type BannerProps = {
  link: string;
}
export function Banner({link} : BannerProps) {

  return (
    <div className='relative h-[316px] w-full laptop:w-[100%] laptop:max-w-[100%]'>
      <div className='bg-shop-pattern absolute inset-0 bg-cover bg-center'></div>

      <div className='absolute inset-0 w-[100%] bg-dark-gray-300 bg-opacity-40 backdrop-blur-[6px]'></div>

      <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded text-center'>
        <h1 className='font-poppins text-3xl font-semibold text-black'>
          Contact
        </h1>

        <div className='flex items-center gap-2'>
          <NavLink to={'/'} className='font-semibold'>
            Home
          </NavLink>
          <CaretRight />
          <NavLink to={'/contact'}>{link}</NavLink>
        </div>
      </div>
    </div>
  );
}