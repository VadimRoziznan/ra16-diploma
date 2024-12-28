import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  order: null,
  isLoading: false,
  error: null,
};

// Создаем слайс
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Запрос на оформление заказа
    fetchOrderRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Успешное оформление заказа
    fetchOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.order = action.payload; // Данные заказа
      state.error = null;
    },
    // Ошибка при оформлении заказа
    fetchOrderFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; // Текст ошибки
    },
  },
});

// Экспортируем экшен-криейторы
export const { fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure } = orderSlice.actions;

// Экспортируем редьюсер по умолчанию
export default orderSlice.reducer;