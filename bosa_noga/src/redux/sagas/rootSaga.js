import { all } from 'redux-saga/effects';
import { watchProductsSaga } from './productsSaga.js';
import { watchCategoriesSaga } from './categoriesSaga.js';
import { watchCatalogItemsSaga } from './catalogItemSaga.js';
import { watchProductDetailsSaga } from './productDetailsSaga.js';
import { watchOrderSaga } from './orderSaga.js';

export default function* rootSaga() {
  yield all([
    watchProductsSaga(),
    watchCategoriesSaga(),
    watchCatalogItemsSaga(),
    watchProductDetailsSaga(),
    watchOrderSaga(),
  ]);
}
