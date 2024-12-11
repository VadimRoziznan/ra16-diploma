import { combineReducers } from 'redux';
import productsReducer from './productsReducer.js';
import categoriesReducer from './categoriesReducer.js';
import catalogItemsReducer from './catalogItemsReducer.js';
import productDetailsReducer from './productDetailsReducer.js';
import cartReducer from './cartReducer.js';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  catalogItems: catalogItemsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReducer;
