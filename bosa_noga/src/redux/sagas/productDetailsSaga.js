import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductsDetails } from '../../api/index.js';
import {
  FETCH_PRODUCT_DETAILS_REQUEST,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailure,
} from '../actions/productDetails.js';

export function* fetchProductDetailsSaga(action) {
  try {
    const product = yield call(fetchProductsDetails, action.id);
    yield put(fetchProductDetailsSuccess(product));
  } catch (error) {
    yield put(fetchProductDetailsFailure(error));
  }
}

export function* watchProductDetailsSaga() {
  yield takeEvery(FETCH_PRODUCT_DETAILS_REQUEST, fetchProductDetailsSaga);
}
