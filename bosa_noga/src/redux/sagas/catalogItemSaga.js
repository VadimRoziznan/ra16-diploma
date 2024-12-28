// catalogItemsSaga.js
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchCatalogItems } from '../../api/index.js';
import {
  fetchCatalogItemsRequest,
  fetchCatalogItemsSuccess,
  fetchCatalogItemsFailure,
} from '../reducers/catalogItemsSlice.js';

export function* fetchCatalogItemsSaga(action) {
  try {
    // Изменение: корректировка ключей action.payload
    const { category, offset, search } = action.payload;
    const catalogItems = yield call(fetchCatalogItems, category, offset, search);
    console.log('Fetched catalogItems:', catalogItems); // <-- Проверьте здесь
    yield put(fetchCatalogItemsSuccess({ catalogItems, isLoadMore: offset > 0 }));
  } catch (error) {
    // Изменение: передача сообщения об ошибке
    yield put(fetchCatalogItemsFailure(error.message));
  }
}

export function* watchCatalogItemsSaga() {
  yield takeEvery(fetchCatalogItemsRequest.type, fetchCatalogItemsSaga);
}