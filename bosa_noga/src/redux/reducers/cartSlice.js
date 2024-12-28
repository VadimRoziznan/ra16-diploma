//cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Получаем начальное состояние из localStorage или устанавливаем пустой массив
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для сохранения состояния корзины в localStorage
/*const saveToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};*/

// Создаем слайс с помощью createSlice
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

      // Сохраняем обновленное состояние в localStorage
      //saveToLocalStorage(state);
    },
    removeProductFromCart: (state, action) => {
      const { id, size } = action.payload;
      const index = state.findIndex((item) => item.id === id && item.size === size);

      if (index !== -1) {
        state.splice(index, 1);
      }

      // Сохраняем обновленное состояние в localStorage
      //saveToLocalStorage(state);
    },
    clearCart: (state) => {
      state.length = 0; // Очистка состояния корзины
      //saveToLocalStorage(state); // Обновление localStorage
    },
  },
});

// Экспортируем сгенерированные экшен-криейторы
export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;

// Экспортируем редьюсер по умолчанию
export default cartSlice.reducer;
