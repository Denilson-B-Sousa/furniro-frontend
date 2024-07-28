import { X } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';
import { removeFromCart } from 'store/cart-slice';
import { useCartDispatch, useCartSelector } from 'store/hooks';

import { PriceFormatter } from '../../utils/Formatter';

export function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items);
  const dispatch = useCartDispatch();

  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = PriceFormatter.format(totalPrice);

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }
  return (
    <div>
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {cartItems.length > 0 && (
        <div className='flex flex-col gap-6'>
          {cartItems.map((item) => {
            const formattedPrice = PriceFormatter.format(item.price);

            return (
              <ul className='grid grid-cols-3 items-center'>
                <li>
                  <div className=''>
                    <img
                      src={item.imageUrl}
                      alt=''
                      width={80}
                      className='rounded-xl'
                    />
                  </div>
                </li>
                <li>
                  <div className='inline-flex flex-col'>
                    <span className='font-poppins text-base font-medium text-black' style={{whiteSpace: 'nowrap'}}>
                      {item.title.length > 15 ? item.title.substring(0, 15) +'...': item.title}
                    </span>
                    <span>
                      {item.quantity}&nbsp;&nbsp; X &nbsp;&nbsp;{' '}
                      <span className='text-sm font-semibold text-light-peach-900'>
                        {formattedPrice}
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className='px-20'>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className='rounded-full bg-dark-gray-300 p-[3px]'
                    >
                      <X
                        fill='#fff'
                        width={16}
                        height={16}
                        cursor={'pointer'}
                      />
                    </button>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      )}

      <div className='fixed bottom-10 '>
        <div className='flex justify-between'>
          <span className='font-poppins text-lg text-black'>Subtotal:</span>
          <span className='text-light-peach-900'>
            <strong>{formattedTotalPrice}</strong>
          </span>
        </div>
        <div className='my-4 w-full border-2 border-b-dark-gray-350'></div>
        <div className='flex justify-around gap-2'>
          <NavLink
            to={'/cart'}
            className='rounded-full border-2 border-black px-6 py-[0.25rem]'
          >
            Cart
          </NavLink>
          <NavLink
            to={'/checkout'}
            className='rounded-full border-2 border-black px-6 py-[0.25rem]'
          >
            Checkout
          </NavLink>
          <NavLink
            to={'/singleProduct'}
            className='rounded-full border-2 border-black px-6 py-[0.25rem]'
          >
            Comparison
          </NavLink>
        </div>
      </div>
    </div>
  );
}
