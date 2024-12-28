import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchOrder } from '../../api/index.js';
import {
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
} from '../reducers/orderSlice';
import Swal from 'sweetalert2';

// Сага для обработки оформления заказа
export function* fetchOrderSaga(action) {
  try {
    const { payload: order } = action; // В Redux Toolkit данные передаются через payload
    const data = yield call(fetchOrder, order);

    // Уведомление об успехе
    yield Swal.fire({
      icon: 'success',
      title: 'Заказ оформлен успешно!',
      confirmButtonText: 'Заказ принят',
    });

    // Очистка корзины и перезагрузка страницы
    localStorage.removeItem('cart');
    window.location.reload();

    // Диспатчим успешное оформление заказа
    yield put(fetchOrderSuccess(data));
  } catch (error) {
    // Уведомление об ошибке
    yield Swal.fire({
      icon: 'error',
      title: 'Ошибка при оформлении заказа',
      text: error.message,
      confirmButtonText: 'Попробовать снова',
    });

    // Диспатчим ошибку
    yield put(fetchOrderFailure(error.message));
  }
}

// Сага для слежения за экшеном fetchOrderRequest
export function* watchOrderSaga() {
  yield takeEvery(fetchOrderRequest.type, fetchOrderSaga);
}