import { NavLink } from "../Navlink"

type NavSectionProps = {
  title: string,
  links: string[]
}
export function NavSection( {title, links} : NavSectionProps) {
  return(
    <div>
      <h3 className="text-dark-gray-300 py-12">{title}</h3>
      <ul className="flex flex-col gap-6">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink>{link.toString()}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}