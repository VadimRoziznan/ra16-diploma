import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchOrder } from '../../api/index.js';
import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from '../actions/order.js';
import Swal from 'sweetalert2';

export function* fetchOrderSaga(action) {
  try {
    const { order } = action;
    const data = yield call(fetchOrder, order);
    
    if (data !== null) {
      // Обработка данных, если она необходима
    }
    yield Swal.fire({
      icon: 'success',
      title: 'Заказ оформлен успешно!',
      confirmButtonText: 'Заказ принят',
    });
    localStorage.removeItem('cart'); // Очистка корзины
    window.location.reload(); // Перезагрузка страницы
    yield put({ type: FETCH_ORDER_SUCCESS, data });
  } catch (error) {
    yield Swal.fire({
      icon: 'error',
      title: 'Ошибка при оформлении заказа',
      text: error.message,
      confirmButtonText: 'Попробовать снова'
    });
    yield put({ type: FETCH_ORDER_FAILURE, error });
  }
}

export function* watchOrderSaga() {
  yield takeEvery(FETCH_ORDER_REQUEST, fetchOrderSaga);
}