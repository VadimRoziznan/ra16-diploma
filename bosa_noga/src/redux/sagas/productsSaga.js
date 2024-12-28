// productsSaga.js
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchProducts } from '../../api/index.js';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productsSlice.js';

export function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* watchProductsSaga() {
  console.log("Saga: Watching for fetchProductsRequest...");
  yield takeEvery('products/fetchProductsRequest', fetchProductsSaga);
}