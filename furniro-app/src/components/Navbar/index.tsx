import { NavLink } from "react-router-dom";



export function Navbar() {
  return (
    <nav>
      <ul className='lg:flex gap-[4.75rem] hidden'>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}