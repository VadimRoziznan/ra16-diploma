import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchProducts,
} from '../../api/index.js';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/products.js';

export function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProducts);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, products });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE, error });
  }
}

export function* watchProductsSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
