import { Button } from '@components/Button';
import { NavLink } from 'react-router-dom';
import { addToCart, removeFromCart } from 'store/cart-slice';
import { useCartDispatch, useCartSelector } from 'store/hooks';

import { formatPrice } from '../../utils/Formatter';

type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export function CartDetails() {
  const dispatch = useCartDispatch();
  const cartItems = useCartSelector((state) => state.cart.items);

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart({ ...item, quantity: item.quantity + 1 }));
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal;

  return (
    <main className='m-auto grid grid-cols-3 justify-items-center py-24'>
      {cartItems.length === 0 ? (
        <section className='col-span-3 text-center'>
          <h2 className='text-2xl font-bold'>Your cart is empty</h2>
          <p className='text-lg py-8 text-dark-gray-300'>
            It looks like you haven't added any items to your cart yet. Start
            shopping to fill your cart!
          </p>
          <NavLink to='/shop' className="flex justify-center cursor-pointer">
            <Button variant='primary' size='md'>
              Start Shopping
            </Button>
          </NavLink>
        </section>
      ) : (
        <>
          <section className='col-span-2'>
            {cartItems.map((item) => (
              <table className='mx-12 w-[51rem]'>
                <thead className='bg-[#F9F1E7]'>
                  <tr>
                    <th className='w-1/6 py-8'></th>
                    <th className='w-2/6 text-center'>Product</th>
                    <th className='w-1/6 text-center'>Price</th>
                    <th className='w-1/6 text-center'>Quantity</th>
                    <th className='w-1/6 text-center'>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <td className='pt-16'></td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={item.imageUrl}
                        alt='Product Image'
                        className='mx-auto h-[100px] w-[100px] rounded-lg'
                      />
                    </td>
                    <td className='font-poppins text-[#9F9F9F]'>
                      {item.title.split('', 20)}...
                    </td>
                    <td className='font-poppins text-[#9F9F9F]'>
                      {formatPrice(subtotal)}
                    </td>
                    <td>
                      <div className='mx-auto flex w-[108px] items-center justify-center rounded-xl border-2 border-dark-gray-500 bg-white'>
                        <button
                          className='px-2 py-2 text-black'
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          -
                        </button>
                        <input
                          type='number'
                          value={item.quantity}
                          className='w-16 border-none bg-transparent text-center'
                        />
                        <button
                          className='px-2 py-2 text-black'
                          onClick={() => handleAddToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{formatPrice(item.price * item.quantity)}</td>
                    <td>
                      <img
                        src='https://furnirobucket.s3.us-east-2.amazonaws.com/images/assets/icons/delete.svg'
                        alt=''
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </section>
          <aside className='bg-[#F9F1E7] px-16 pb-16 pt-4 text-center'>
            <h2 className='mb-4 pb-8 text-3xl font-bold'>Cart Totals</h2>
            <div className='mb-2'>
              <span className='font-medium'>Subtotal:</span>
              <span className='ml-2'>{formatPrice(subtotal)}</span>
            </div>
            <div className='mb-4'>
              <span className='font-medium'>Total:</span>
              <span className='ml-2'>{formatPrice(total)}</span>
            </div>
            <Button variant='outlined-secondary' size='sm'>
              <NavLink to={'/checkout'}>Check Out</NavLink>
            </Button>
          </aside>
        </>
      )}
    </main>
  );
}
