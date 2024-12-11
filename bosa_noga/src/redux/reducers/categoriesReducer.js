import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/categories.js';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state, categories: action.categories, isLoading: false, error: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

export default categoriesReducer;
