// productDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  product: null,
  isLoading: false,
  error: null,
};

// Создаем слайс
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

// Экспортируем сгенерированные экшен-криейторы
export const {
  fetchProductDetailsRequest,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailure,
} = productDetailsSlice.actions;

// Экспортируем редьюсер по умолчанию
export default productDetailsSlice.reducer;