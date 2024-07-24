import { ComponentProps, ReactNode } from "react"

type LinkProps = {
  children: ReactNode
} & ComponentProps<'a'>

export function NavLink({ children, ...rest } : LinkProps) {
  return <a  className="font-poppins text-black font-medium cursor-pointer" {...rest}>
    {children}
  </a>
}