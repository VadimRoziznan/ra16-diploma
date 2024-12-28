// productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

// Создаем слайс
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchProductsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Экспортируем сгенерированные экшен-криейторы
export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

// Экспортируем редьюсер по умолчанию
export default productsSlice.reducer;