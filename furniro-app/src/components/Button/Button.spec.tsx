import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Button } from './index';

describe('<Button>', () => {

  test('Should render button', () => {
    const { getByText, getByRole } = render(<Button>button</Button>);

    const buttonElement: HTMLElement = getByRole('button');
    const buttonTextElement: HTMLElement = getByText('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  const baseClass = 'flex items-center justify-center font-poppins text-[1rem]';

  test('Shoul render button with base prop', () => {
    const { getByRole } = render(<Button variant='secondary'>button</Button>);
    const buttonElement: HTMLElement = getByRole('button');

    expect(buttonElement).toHaveClass(baseClass);
  })
  
  const sizeClasses = {
    xl: 'w-[225px] h-[48px]',
    md: 'w-[215px] h-[64px]',
    sm: 'w-[176px] h-[48px]',
    xs: 'w-[48px] h-[48px]',
  };

  const variantClasses = {
    primary: 'bg-light-peach-900 text-white font-bold uppercase',
    secondary: 'bg-light-peach-900 text-white font-semibold uppercase',
    tertiary: 'bg-white text-light-peach-900 font-semibold',
    outlined:
      'border-2 border-light-peach-900 text-light-peach-900 font-semibold uppercase',
    'outlined-secondary':
      'border-2 border-black text-black font-normal rounded-2xl',
  };

  describe.each(Object.keys(sizeClasses) as Array<keyof typeof sizeClasses>)(
    'size: %s',
    (size) => {
      describe.each(
        Object.keys(variantClasses) as Array<keyof typeof variantClasses>,
      )('variant: %s', (variant) => {
        test(`Should render button with props size ${size} and variant ${variant}`, () => {
          const { getByRole } = render(
            <Button size={size} variant={variant}>
              button
            </Button>,
          );

          const buttonElement: HTMLElement = getByRole('button');

          expect(buttonElement).toHaveClass(sizeClasses[size]);
          expect(buttonElement).toHaveClass(variantClasses[variant]);
        });
      });
    },
  );
})