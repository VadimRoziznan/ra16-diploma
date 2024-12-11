import {
  FETCH_CATALOG_ITEMS_REQUEST,
  FETCH_CATALOG_ITEMS_SUCCESS,
  FETCH_CATALOG_ITEMS_FAILURE,
} from '../actions/catalogItem.js';

const initialState = {
  catalogItems: [],
  isLoading: false,
  error: null,
  hasMore: true, // Показывает, можно ли загружать ещё
};

const catalogItemsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATALOG_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        ...(action.offset === 0 && { catalogItems: [] }), // Очищаем данные при новом поиске
      };

    case FETCH_CATALOG_ITEMS_SUCCESS: {
      const newItems = action.isLoadMore
        ? [...state.catalogItems, ...action.catalogItems]
        : action.catalogItems;

      return {
        ...state,
        catalogItems: newItems,
        isLoading: false,
        hasMore: action.catalogItems.length >= 6, // Если меньше 6 элементов, отключаем кнопку
      };
    }

    case FETCH_CATALOG_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default catalogItemsReducer;
