import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCatalogItems } from '../../api/index.js';
import {
  FETCH_CATALOG_ITEMS_REQUEST,
  FETCH_CATALOG_ITEMS_SUCCESS,
  FETCH_CATALOG_ITEMS_FAILURE,
} from '../actions/catalogItem.js';

export function* fetchCatalogItemsSaga(action) {
  const { categoryId, offset, searchQuery } = action;
  try {
    const catalogItems = yield call(fetchCatalogItems, categoryId, offset, searchQuery);
    yield put({
      type: FETCH_CATALOG_ITEMS_SUCCESS,
      catalogItems,
      isLoadMore: offset > 0, // Указывает, добавляются ли данные
    });
  } catch (error) {
    yield put({ type: FETCH_CATALOG_ITEMS_FAILURE, error });
  }
}

export function* watchCatalogItemsSaga() {
  yield takeEvery(FETCH_CATALOG_ITEMS_REQUEST, fetchCatalogItemsSaga);
}
