import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: object;
}

const initialState: CartState = {
  products: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      let count;
      if(state.products[action.payload]){
        
      }
      state.products = {
        ...state.products,
        [action.payload]: ,
      };
    },
  },
});
