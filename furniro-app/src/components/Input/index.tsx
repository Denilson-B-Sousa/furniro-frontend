import { ComponentProps } from "react";

type InputProps = & ComponentProps<'input'>;

export function Input({...rest} : InputProps) {
  return (
    <input
      type='text'
      {...rest}
      className=' w-[24rem] laptop:w-[32rem] rounded-xl border-2 border-dark-gray-300 p-6 outline-dark-gray-900'
    />
  );
}