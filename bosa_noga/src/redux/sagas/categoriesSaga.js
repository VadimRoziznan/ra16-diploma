import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCategories } from '../../api/index.js';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/categories.js';

export function* fetchCategoriesSaga() {
  try {
    const categories = yield call(fetchCategories);
    yield put({ type: FETCH_CATEGORIES_SUCCESS, categories });
  } catch (error) {
    yield put({ type: FETCH_CATEGORIES_FAILURE, error });
  }
}

export function* watchCategoriesSaga() {
  yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}
