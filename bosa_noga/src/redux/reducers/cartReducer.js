import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../actions/cart.js';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const saveToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const {
        id, size, count, price, title,
      } = action.product;
      const existingItem = state.find((item) => item.id === id && item.size === size);

      let updatedCart;

      if (existingItem) {
        // Если товар с таким размером уже есть, обновляем количество
        updatedCart = state.map((item) => (item.id === id && item.size === size
          ? { ...item, count: item.count + count }
          : item));
      } else {
        // Если товара нет, добавляем новый
        updatedCart = [
          ...state,
          {
            id, size, count, price, title,
          },
        ];
      }

      saveToLocalStorage(updatedCart);
      return updatedCart;
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const { id, size } = action.product;
      const updatedCart = state.filter((item) => item.id !== id || item.size !== size);
      saveToLocalStorage(updatedCart);
      return updatedCart;
    }

    default:
      return state;
  }
}

export default cartReducer;
