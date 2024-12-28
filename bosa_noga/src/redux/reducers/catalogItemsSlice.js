import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogItems: [],
  isLoading: false,
  error: null,
  hasMore: true, // Показывает, можно ли загружать ещё
};

const catalogItemsSlice = createSlice({
  name: 'catalogItems',
  initialState,
  reducers: {
    fetchCatalogItemsRequest: (state, action) => {
      state.isLoading = true;
      state.error = null;
      if (action.payload.offset === 0) {
        state.catalogItems = []; // Очищаем данные при новом поиске
      }
    },
    fetchCatalogItemsSuccess: (state, action) => {
      const { catalogItems, isLoadMore } = action.payload;
      state.catalogItems = isLoadMore
        ? [...state.catalogItems, ...catalogItems]
        : catalogItems;
      state.isLoading = false;
      state.hasMore = catalogItems.length >= 6; // Если меньше 6 элементов, отключаем кнопку
    },
    fetchCatalogItemsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Экспортируем сгенерированные экшен-криейторы
export const { fetchCatalogItemsRequest, fetchCatalogItemsSuccess, fetchCatalogItemsFailure } = catalogItemsSlice.actions;

// Экспортируем редьюсер по умолчанию
export default catalogItemsSlice.reducer;