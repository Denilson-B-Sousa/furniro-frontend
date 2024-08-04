import {  CaretRight } from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";

type ProductNavigationProps = {
  title: string;
}

export function ProductNavigation({ title } : ProductNavigationProps) {

  const navigate = useNavigate();

  function handleNavigationHome(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate('/');
  }

  function handleNavigationShop(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate('/shop');
  }

  return (
    <section className='flex px-8 h-[100px] w-full items-center bg-[#F9F1E7] font-poppins laptop:px-36 mb-8 mt-2'>
      <ul className='inline-flex items-center gap-8'>
        <li>
          <NavLink to={'/'} onClick={handleNavigationHome}>
            Home
          </NavLink>
        </li>
        <CaretRight width={24} height={24} />
        <li>
          <NavLink to={'/'} onClick={handleNavigationShop}>
            Shop
          </NavLink>
        </li>
        <CaretRight width={24} height={24} />

        <span className='h-8 border-r-2 border-black'></span>
        <li><h4 className="text-black font-medium">{title}</h4></li>
      </ul>
    </section>
  );
}