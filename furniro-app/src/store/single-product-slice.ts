import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export type SingleItem = {
  id: string;
  title: string;
  price: number;
  salesPrice: number;
  quantity: number;
  imageUrl: string;
  description: string;
  rating: number;
  sku: string;
  category: string;
  images: Image;
  colors: Color[];
  size: string[];
  tags: string[];
};


export type Color = {
  name: string;
  hex: string;
};

export type Image = {
  mainImage: string;
  gallery: string[];
}


type SingleState = {
  items: SingleItem[];
};

const initialState: SingleState = {
  items: [],
};

export const singleProductSlice: Slice<SingleState> = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        price: number;
        salesPrice: number;
        imageUrl: string;
        description: string;
        rating: number;
        sku: string;
        category: string;
        images: Image;
        colors: Color[];
        size: string[];
        tags: string[];
      }>,
    ) {
      console.log('Adding product:', action.payload);
      const itemIndex: number = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addProduct } = singleProductSlice.actions;
