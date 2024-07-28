import { Button } from '@components/Button';
import { useState } from 'react';
import {  useCartSelector } from 'store/hooks';
import { PriceFormatter } from 'utils/Formatter';

export function PaymentSummary() {
  const cartItems = useCartSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = PriceFormatter.format(totalPrice);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className='px-36 py-36'>
      {cartItems.length > 0 && (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className='mb-8'>
              <div className='flex justify-between gap-60 text-black'>
                <div className='inline-flex flex-col gap-2'>
                  <h3 className='font-poppins text-2xl font-semibold'>
                    Product
                  </h3>
                  <span className='text-dark-gray-500'>{item.title} <b className='text-semibold text-black'>x{item.quantity}</b></span>
                  
                  <span>Subtotal</span>
                  <span>Total</span>
                </div>
                <div className='inline-flex flex-col gap-[1.25rem] text-right'>
                  <h3 className='font-poppins text-2xl font-semibold text-black'>
                    Subtotal
                  </h3>
                  <span>{PriceFormatter.format(item.price)}</span>
                  <span>{formattedTotalPrice}</span>
                  <strong className='text-xl text-[#B88E2F]'>
                    {formattedTotalPrice}
                  </strong>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      <div className='my-8 border-t-2 border-[#D9D9D9]' />

      <div className='flex flex-col space-y-2'>
        <label className='inline-flex cursor-pointer items-center gap-4'>
          <input
            type='radio'
            name='custom-radio'
            value='option1'
            className='peer hidden'
            onChange={handleOptionChanged}
          />
          <span className='rounded-full border border-gray-400 bg-white px-2 py-2 text-black peer-checked:bg-black peer-checked:text-white'></span>
          Direct Bank Transfer
        </label>
        {selectedOption === 'option1' && (
          <div>
            <p className='py-2 font-poppins font-light text-[#9F9F9F]'>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        )}
        <label className='inline-flex cursor-pointer items-center gap-4'>
          <input
            type='radio'
            name='custom-radio'
            value='option2'
            className='peer hidden'
            onChange={handleOptionChanged}
          />
          <span className='rounded-full border border-gray-400 bg-white px-2 py-2 text-black peer-checked:bg-black peer-checked:text-white'></span>
          Cash On Delivery
        </label>
        {selectedOption === 'option2' && (
          <div>
            <p className='py-2 font-poppins font-light text-[#9F9F9F]'>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-center py-8'>
        <Button variant='outlined-secondary' size='xl'>
          Place order
        </Button>
      </div>
    </section>
  );
}
