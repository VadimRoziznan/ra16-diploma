import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: null,
  isLoading: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    fetchProductDetailsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductDetailsSuccess: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
    fetchProductDetailsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchProductDetailsRequest,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailure,
} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;