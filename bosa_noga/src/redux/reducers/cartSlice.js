import { createSlice } from '@reduxjs/toolkit';

// Получаем начальное состояние из localStorage или устанавливаем пустой массив
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { id, size, count, price, title } = action.payload;
      const existingItem = state.find((item) => item.id === id && item.size === size);

      if (existingItem) {
        // Если товар с таким размером уже есть, обновляем количество
        existingItem.count += count;
      } else {
        // Если товара нет, добавляем новый
        state.push({ id, size, count, price, title });
      }
    },
    removeProductFromCart: (state, action) => {
      const { id, size } = action.payload;
      const index = state.findIndex((item) => item.id === id && item.size === size);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.length = 0; // Очистка состояния корзины
    },
  },
});

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
