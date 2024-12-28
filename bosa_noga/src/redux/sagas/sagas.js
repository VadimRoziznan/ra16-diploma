// sagas.js
import { takeEvery, put, call } from 'redux-saga/effects';
import {
  fetchProducts,
  fetchProductsDetails,
  fetchOrder,
  fetchCategories,
  fetchCatalogItems,
} from '../../api/index.js';

import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from '../reducers/productsSlice.js';
import { fetchProductDetailsRequest, fetchProductDetailsSuccess, fetchProductDetailsFailure } from '../reducers/productDetailsSlice.js';
import { fetchOrderRequest, fetchOrderSuccess, fetchOrderFailure } from '../reducers/orderSlice.js';
import { fetchCategoriesRequest, fetchCategoriesSuccess, fetchCategoriesFailure } from '../reducers/categoriesSlice.js';
import { fetchCatalogItemsRequest, fetchCatalogItemsSuccess, fetchCatalogItemsFailure } from '../reducers/catalogItemsSlice.js';
import { fetchCartRequest, fetchCartSuccess, fetchCartFailure, clearCart } from '../reducers/cartSlice.js';
import Swal from 'sweetalert2';

// Продукты
export function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* watchProductsSaga() {
  yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
}

// Детали продукта
export function* fetchProductDetailsSaga(action) {
  try {
    const product = yield call(fetchProductsDetails, action.payload);
    yield put(fetchProductDetailsSuccess(product));
  } catch (error) {
    yield put(fetchProductDetailsFailure(error));
  }
}

export function* watchProductDetailsSaga() {
  yield takeEvery(fetchProductDetailsRequest.type, fetchProductDetailsSaga);
}

// Заказ
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
    window.location.reload(); // Перезагрузка страницы

    // Диспатчим успешный результат
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
    yield put(fetchOrderFailure(error));
  }
}


export function* watchOrderSaga() {
  yield takeEvery(fetchOrderRequest.type, fetchOrderSaga);
}

// Категории
export function* fetchCategoriesSaga() {
  try {
    const categories = yield call(fetchCategories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* watchCategoriesSaga() {
  yield takeEvery(fetchCategoriesRequest.type, fetchCategoriesSaga);
}

// Каталог
export function* fetchCatalogItemsSaga(action) {
  try {
    const catalogItems = yield call(fetchCatalogItems, action.payload.category, action.payload.offset, action.payload.search);
    yield put(fetchCatalogItemsSuccess({
      catalogItems, // массив данных
      isLoadMore: action.payload.offset > 0, // true, если это загрузка дополнительных данных
    }));
  } catch (error) {
    yield put(fetchCatalogItemsFailure(error));
  }
}

export function* watchCatalogItemsSaga() {
  yield takeEvery(fetchCatalogItemsRequest.type, fetchCatalogItemsSaga);
}