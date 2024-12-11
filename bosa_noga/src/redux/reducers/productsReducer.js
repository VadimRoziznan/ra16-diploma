import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/products.js';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state, products: action.products, isLoading: false, error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default productsReducer;
