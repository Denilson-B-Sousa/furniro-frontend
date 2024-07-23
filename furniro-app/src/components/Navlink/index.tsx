import { ComponentProps, ReactNode } from "react"

type LinkProps = {
  children: ReactNode
} & ComponentProps<'a'>

export function NavLink({ children, ...rest } : LinkProps) {
  return <a href="" className="font-poppins text-black font-medium" {...rest}>
    {children}
  </a>
}