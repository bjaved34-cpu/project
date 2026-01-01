import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
       const newItem = action.payload;
          const existingItem = state.items.find(item => item.id === newItem.id);
          state.totalQuantity++;
          if (!existingItem) {
            state.items.push({
              id: newItem.id,
              name: newItem.title,
              price: newItem.price,
              quantity: 1,
              totalPrice: newItem.price,
            });
          } else {
            existingItem.quantity++;
            existingItem.totalPrice += newItem.price;
          }
          state.totalAmount += newItem.price;
    },removeItemFromCart(state, action) {
          const id = action.payload;
          const existingItem = state.items.find(item => item.id === id);
          state.totalQuantity--;
          state.totalAmount -= existingItem.price;
          if (existingItem.quantity === 1) {
            state.items = state.items.filter(item => item.id !== id);
          } else {
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price;
          }
        },
  },
});

export const { addToCart , removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
