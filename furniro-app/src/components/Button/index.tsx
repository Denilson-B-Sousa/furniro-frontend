import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: 'flex items-center justify-center font-poppins text-[1rem] ',

  variants: {
    variant: {
      primary: 'bg-light-peach-900 text-white font-bold uppercase',
      secondary: 'bg-light-peach-900 text-white font-semibold uppercase',
      tertiary: 'bg-white text-light-peach-900 font-semibold',
      outlined:
        'border-2 border-light-peach-900 text-light-peach-900 font-semibold uppercase',
      'outlined-secondary':
        'border-2 border-black text-black font-normal rounded-2xl',
    },

    size: {
      default: 'w-[222px] h-[74px]',
      xl: 'w-[225px] h-[48px]',
      form: 'w-[225px] h-[48px] rounded-md',
      full: 'w-[24rem] laptop:w-[32rem] p-6 rounded-xl',
      md: 'w-[215px] h-[64px]',
      sm: 'w-[176px] h-[48px]',
      xs: 'w-[48px] h-[48px]',
    },
  },
});

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export function Button({ children, variant, size, ...rest} : ButtonProps) {
  return (
    <button {...rest} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}