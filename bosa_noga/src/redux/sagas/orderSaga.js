import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchOrder } from '../../api/index.js';
import {
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
} from '../reducers/orderSlice';
import { clearCart } from '../reducers/cartSlice';
import Swal from 'sweetalert2';

export function* fetchOrderSaga(action) {
  try {
    // Выполняем запрос на оформление заказа
    const data = yield call(fetchOrder, action.payload);

    // Уведомление об успешном оформлении заказа
    yield Swal.fire({
      icon: 'success',
      title: 'Заказ оформлен успешно!',
      confirmButtonText: 'Заказ принят',
    });

    // Очистка корзины и обновление страницы
    yield put(clearCart()); // Очистка состояния корзины в Redux
    localStorage.removeItem('cart'); // Очистка localStorage

    // Диспатчим успешный результат
    yield put(fetchOrderSuccess(data));
  } catch (error) {
    // Уведомление об ошибке
    yield Swal.fire({
      icon: 'error',
      title: 'Ошибка при оформлении заказа',
      confirmButtonText: 'Попробовать снова',
    });

    // Диспатчим ошибку
    yield put(fetchOrderFailure(error));
  }
}


export function* watchOrderSaga() {
  yield takeEvery(fetchOrderRequest.type, fetchOrderSaga);
}