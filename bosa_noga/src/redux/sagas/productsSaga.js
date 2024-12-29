import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchProducts } from '../../api/index.js';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../reducers/productsSlice.js';

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