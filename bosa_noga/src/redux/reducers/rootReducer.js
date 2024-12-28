import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './productsSlice.js';
import categoriesReducer from './categoriesSlice.js';
import catalogItemsReducer from './catalogItemsSlice.js';
import productDetailsReducer from './productDetailsSlice.js';
import cartReducer from './cartSlice.js';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  catalogItems: catalogItemsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;