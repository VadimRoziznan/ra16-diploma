import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: null,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetchOrderRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.order = action.payload;
      state.error = null;
    },
    fetchOrderFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  fetchOrderRequest, 
  fetchOrderSuccess, 
  fetchOrderFailure 
} = orderSlice.actions;

export default orderSlice.reducer;