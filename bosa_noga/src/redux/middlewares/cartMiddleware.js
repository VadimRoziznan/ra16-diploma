// cartMiddleware.js

export const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action); // Передаем действие дальше в цепочку

  // Отслеживаем действия, связанные с корзиной
  if (['cart/addProductToCart', 'cart/removeProductFromCart', 'cart/clearCart'].includes(action.type)) {
    const state = store.getState(); // Получаем текущее состояние
    const cart = state.cart; // Достаем корзину из состояния
    localStorage.setItem('cart', JSON.stringify(cart)); // Сохраняем её в localStorage
  }

  return result; // Возвращаем результат
};