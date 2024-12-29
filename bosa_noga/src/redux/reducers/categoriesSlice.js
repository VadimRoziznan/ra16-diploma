import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchCategoriesFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { 
  fetchCategoriesRequest, 
  fetchCategoriesSuccess, 
  fetchCategoriesFailure 
} = categoriesSlice.actions;

export default categoriesSlice.reducer;