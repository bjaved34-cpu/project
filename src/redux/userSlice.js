import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
   user:"adasd"
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser:(state,action)=>{
        state.user = action.payload;
    },logoutUser:(state)=>{
        state.user = null
    }
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
