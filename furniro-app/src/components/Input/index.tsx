import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      className='rounded-xl border-2 border-dark-gray-300 p-6 outline-dark-gray-900'
    />
  );
});

export { Input };
