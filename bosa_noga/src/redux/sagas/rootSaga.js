// rootSaga.js
import { all } from 'redux-saga/effects';
import {
  watchProductsSaga,
  watchProductDetailsSaga,
  watchOrderSaga,
  watchCategoriesSaga,
  watchCatalogItemsSaga,
} from './sagas.js';

export default function* rootSaga() {
  yield all([
    watchProductsSaga(),
    watchProductDetailsSaga(),
    watchOrderSaga(),
    watchCategoriesSaga(),
    watchCatalogItemsSaga(),
  ]);
}