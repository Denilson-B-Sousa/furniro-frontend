import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice';
import { singleProductSlice } from './single-product-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: singleProductSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
