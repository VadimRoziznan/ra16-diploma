import {
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from '../actions/productDetails.js';

const initialState = {
  product: null,
  isLoading: false,
  error: null,
};

const productDetailsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, product: action.product, isLoading: false };
    case FETCH_PRODUCT_DETAILS_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default productDetailsReducer;
