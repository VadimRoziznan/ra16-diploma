import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchCatalogItems } from '../../api/index.js';
import {
  fetchCatalogItemsRequest,
  fetchCatalogItemsSuccess,
  fetchCatalogItemsFailure,
} from '../reducers/catalogItemsSlice.js';

export function* fetchCatalogItemsSaga(action) {
  try {
    const catalogItems = yield call(fetchCatalogItems, action.payload.category, action.payload.offset, action.payload.search);
    yield put(fetchCatalogItemsSuccess({
      catalogItems,
      isLoadMore: action.payload.offset > 0, // true, если это загрузка дополнительных данных
    }));
  } catch (error) {
    yield put(fetchCatalogItemsFailure(error));
  }
}

export function* watchCatalogItemsSaga() {
  yield takeEvery(fetchCatalogItemsRequest.type, fetchCatalogItemsSaga);
}