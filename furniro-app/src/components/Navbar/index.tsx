import { NavLink } from "../Navlink";



export function Navbar() {
  return (
    <nav>
      <ul className='lg:flex gap-[4.75rem] hidden'>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Shop</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}