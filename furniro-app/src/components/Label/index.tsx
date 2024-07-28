import { ComponentProps } from 'react';

type LabelProps = ComponentProps<'label'>;

const Label = (({ ...rest } : LabelProps) => {
  return (
    <label
      {...rest}
      className='py-6 font-poppins text-xl font-medium text-black'
    />
  );
});

export { Label };
