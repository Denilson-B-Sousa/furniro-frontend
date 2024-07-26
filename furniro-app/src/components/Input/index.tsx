import { ComponentProps } from "react";

type InputProps = & ComponentProps<'input'>;

export function Input({...rest} : InputProps) {
  return (
    <input
      type='text'
      {...rest}
      className='w-[32rem] rounded-xl border-2 border-dark-gray-300 p-6'
    />
  );
}