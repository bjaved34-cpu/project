import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'products/fetchProducts',
  async ()=>{
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  });
const initialState = { 
   products : [],
   loading : false,
   error : null,
};

const productsDataSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchData.pending,(state)=>{
        state.loading = true
    }),
    builder.addCase(fetchData.fulfilled,(state,action)=>{
        state.loading = false;
        state.products = action.payload;
    })
    builder.addCase(fetchData.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
    })
  }
  
});

export const {  } = productsDataSlice.actions;

export default productsDataSlice.reducer;
