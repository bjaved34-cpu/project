import { configureStore, createReducer } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productsDataReducer from './productsDataSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products:productsDataReducer,
    cart:cartReducer,
  },
});
  