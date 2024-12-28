// productDetailsSaga.js
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchProductsDetails } from '../../api/index.js';
import {
  fetchProductDetailsRequest,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailure,
} from './productDetailsSlice.js';

export function* fetchProductDetailsSaga(action) {
  try {
    const product = yield call(fetchProductsDetails, action.payload);
    yield put(fetchProductDetailsSuccess(product));
  } catch (error) {
    yield put(fetchProductDetailsFailure(error));
  }
}

export function* watchProductDetailsSaga() {
  yield takeEvery('productDetails/fetchProductDetailsRequest', fetchProductDetailsSaga);
}